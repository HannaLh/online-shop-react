import React, {useState, useCallback} from 'react';
import debounce from 'lodash/debounce';
import {useFurniture} from 'hooks/useFurniture';

import './search.scss';

import removeIcon from 'assets/img/icons/remove-icon.svg';

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const {onChangeSearchValue} = useFurniture();

    const onClickClear = () => {
        onChangeSearchValue('');
        setSearchValue('');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(debounce((newSearchValue: string) => (
            onChangeSearchValue(newSearchValue)
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
