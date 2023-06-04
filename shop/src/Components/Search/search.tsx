import React, {useRef, useState, useCallback} from 'react';
import debounce from 'lodash/debounce';
import {useDispatch} from 'react-redux';
import {setSearchValue as setSearchValueAction} from '../../redux/filter/slice';

import './Search.css';

import searchSvg from '../assets/img/icons/search.svg';
import removeIcon from '../assets/img/icons/remove-icon.svg';

export const Search = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearchValueAction(''));
        inputRef.current?.focus();
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
        <div className="search-container">
            <label htmlFor="searchright">
                <img src={searchSvg} alt="search icon"></img>
                {searchValue && (
                    <img onClick={onClickClear} className="clearIcon" src={removeIcon} alt="Remove icon"/>
                )}
            </label>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={onChangeInput}
                className="search expandright"
                id="searchright"
                type="search"
                placeholder="Search"
            />
        </div>
    );
};
