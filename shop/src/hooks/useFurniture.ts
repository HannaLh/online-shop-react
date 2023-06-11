import {useCallback} from 'react';

import {useAppDispatch, useAppSelector} from 'store';
import {fetchFurniture} from 'store/reducers/furniture/actions';
import {
    filterSelector,
    setCategoryId,
    setCurrentPage,
    setSearchValue,
    setSort,
} from 'store/reducers/filter/filter';
import {Storage} from 'utils/storage';
import {FURNITURE_FILTERS_KEY} from '../constants';

import type {SortPropertyType} from '../store/reducers/filter/types';

export const useFurniture = () => {
    const {categoryId, sort, currentPage, searchValue} = useAppSelector(filterSelector);
    const dispatch = useAppDispatch();

    const onChangeCategory = useCallback((idx: number) => {
        Storage.set(FURNITURE_FILTERS_KEY, {categoryId: idx});
        dispatch(setCategoryId(idx));
    }, [dispatch]);

    const onChangePage = useCallback((page: number) => {
        Storage.set(FURNITURE_FILTERS_KEY, {page});
        dispatch(setCurrentPage(page));
    }, [dispatch]);

    const onChangeSearchValue = useCallback((searchValue: string) => {
        dispatch(setSearchValue(searchValue));
    }, [dispatch]);

    const onChangeSortValue = useCallback((sortValue: SortPropertyType) => {
        Storage.set(FURNITURE_FILTERS_KEY, {sort: sortValue});
        dispatch(setSort(sortValue));
    }, [dispatch]);

    const getAllFurniture = useCallback(() => {
        const [sortBy, order] = sort.toLocaleLowerCase().split('_');
        const category = categoryId > 0 ? String(categoryId) : '';

        dispatch(
            fetchFurniture({
                sortBy,
                order,
                category,
                search: searchValue,
                currentPage: String(currentPage),
            }),
        );
    }, [sort, categoryId, searchValue, currentPage, dispatch]);

    return {
        onChangeCategory,
        onChangePage,
        onChangeSearchValue,
        onChangeSortValue,
        getAllFurniture,
    };
};
