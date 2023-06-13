import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import {selectFilter, setCategoryId, setCurrentPage, setFilters} from '../../redux/filter/slice';
import {Categories} from '../../Components/Categories/Categories';
import {Sort, sortList} from '../../Components/Sort/Sort';
import {Card} from '../../Components/FurnitureBlock/Card/Card';
import Skeleton from '../../Components/FurnitureBlock/Card/CardSkeleton';
import {Banner} from '../../Components/Banner/Banner';
import {Pagination} from '../../Components/Pagination/Pagination';
import {fetchFurniture, selectFurnitureData} from '../../redux/furniture/slice';

import './Home.scss';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMounted = React.useRef(false);

    const {items, status} = useSelector(selectFurnitureData );
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

    const sortType = sort.sortProperty;

    const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
    }, []);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getFurniture = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? String(categoryId) : '';
        const search = searchValue;

        dispatch(
            //@ts-ignore
            fetchFurniture({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            }),
        );
            window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (isMounted.current) {
            const params = {
                categoryId: categoryId > 0 ? categoryId : null,
                sortProperty: sortType,
                currentPage,
            };
            const queryString = qs.stringify(params, {skipNulls: true});
            navigate(`/?${queryString}`);
        };
    }, [categoryId, sortType, searchValue, currentPage]);


    // const params = qs.parse(window.location.search.substring(1)) as unknown as SearchFurnitureParams;
    // const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
    // dispatch(
    //     setFilters({
    //         searchValue: params.search,
    //         categoryId: Number(params.category),
    //         currentPage: Number(params.currentPage),
    //         sort: sortObj || sortList[0],
    //     }),
    // );

    useEffect(() => {
        getFurniture();
    }, [categoryId, sortType, searchValue, currentPage]);


//     useEffect(() => {
//         if (window.location.search) {
//             const params = qs.parse(window.location.search.substring(1));
// 
//             const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
//         
//             dispatch(
//                 setFilters({
//                     searchValue: params.search,
//                     categoryId: Number(params.category),
//                     currentPage: Number(params.currentPage),
//                     sort: sort || sortList[0],
//                 })
//             );
//             isMounted.current = true;
//         }
//     }, [])


    const furniture = items.map((obj: any) => <Card key={obj.id}{...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <Banner />
            <div className='container'>
                <div className='container__products'>
                    <div className='container__products-search'>
                        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                        <Sort value={sort} />
                    </div> 
                </div>
                {status === 'error' ? (
                    <div className='container__error-message'>
                        <h2>Cannot load items</h2>
                        <p>It seems that some kind of error has occured</p>
                    </div>
                ) : (
                    <div className="container__card-flex"> {status === 'loading' ? skeletons : furniture} </div>
                )}
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>

        </>
    );
};

export default Home;
