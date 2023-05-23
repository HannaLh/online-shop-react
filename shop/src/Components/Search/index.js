import React from 'react'
import './Search.css'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce'


const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus()
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 1000),
        [],
    );

    const onChangeInput = event => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className="search-container">
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className="search expandright"
                id="searchright" type="search"
                name="q"
                placeholder="Search" />
            <label htmlFor="searchright">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_23)">
                    <path d="M7 9H2V7H7V9ZM7 12H2V14H7V12ZM20.59 19L16.76 15.17C15.96 15.69 15.02 16 14 16C11.24 16 9 13.76 9 11C9 8.24 11.24 6 14 6C16.76 6 19 8.24 19 11C19 12.02 18.69 12.96 18.17 13.75L22 17.59L20.59 19ZM17 11C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11C11 12.65 12.35 14 14 14C15.65 14 17 12.65 17 11ZM2 19H12V17H2V19Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_7_23">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                {value && (
                    <svg onClick={onClickClear} className="clearIcon" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title />
                        <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" /><path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
                    </svg>
                )}
            </label>
        </div>
    )
}

export default Search;