import React, {useState, useCallback} from 'react';
import debounce from 'lodash/debounce';
import {useAppDispatch} from 'store';
import {setSearchValue as setSearchValueAction} from 'store/reducers/filter/filter';

import './search.scss';

import removeIcon from 'assets/img/icons/remove-icon.svg';

export const Search = () => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');

    const onClickClear = () => {
        dispatch(setSearchValueAction(''));
        setSearchValue('');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(debounce((str: string) => (
            dispatch(setSearchValueAction(str))
        ), 200),
    []);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextSearchValue = event.target.value;

        updateSearchValue(nextSearchValue);
        setSearchValue(nextSearchValue);
    };

    return (
        <div className="search">
            <input
                value={searchValue}
                onChange={onChangeInput}
                className="search__input"
                type="text"
                placeholder="Search"
            />
            {searchValue && (
                <img onClick={onClickClear} className="search__clear-icon" src={removeIcon} alt="Remove icon"/>
            )}
        </div>
    );
};
