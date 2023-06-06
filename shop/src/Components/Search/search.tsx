import React, {useRef, useState, useCallback} from 'react';
import debounce from 'lodash/debounce';
import {useDispatch} from 'react-redux';
import {setSearchValue as setSearchValueAction} from '../../redux/filter/slice';

import './search.scss';

import removeIcon from '../assets/img/icons/remove-icon.svg';

export const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearchValueAction(''));
        setSearchValue('');
    };

    const updateSearchValue = useCallback((nextSearchValue: string) => (
        debounce(value => dispatch(setSearchValueAction(value)), 200)(nextSearchValue)
    ), [dispatch]);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextSearchValue = event.target.value;

        updateSearchValue(nextSearchValue);
        setSearchValue(nextSearchValue);
    };

    return (
        <div className="search">
            <input
                ref={inputRef}
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
