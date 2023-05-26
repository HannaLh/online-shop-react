import React from 'react';
import "./Sort.css";
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/filter/slice';
import { Sort as SortType, SortPropertyEnum } from '../../redux/filter/types';

type SortListItem = {
    name: string;
    sortProperty: SortPropertyEnum;
}

type PopupClick = MouseEvent & {
    path: Node[];
};

type SortPopupProps = {
    value: SortType;
};

export const sortList: SortListItem[] = [
    { name: 'Popularity: High to Low', sortProperty: SortPropertyEnum.RATING_DESC },
    { name: 'Popularity: Low to High', sortProperty: SortPropertyEnum.RATING_ASC },
    { name: 'Price: High to Low', sortProperty: SortPropertyEnum.PRICE_DESC },
    { name: 'Price: Low to High', sortProperty: SortPropertyEnum.PRICE_ASC },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
    const dispatch = useDispatch();
    const sortRef = React.useRef<HTMLButtonElement>(null);

    const [isVisible, setIsVisible] = React.useState(false);
    
    const onClickListItem = (obj: SortListItem) => {
        dispatch(setSort(obj));
        setIsVisible(false);
    }

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
                setIsVisible(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);

        return () => { document.body.removeEventListener('click', handleClickOutside) }

    }, []);

    return (
        <button ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickListItem(obj)}
                                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </button>
    )
});
