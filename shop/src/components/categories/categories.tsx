import React, {memo} from 'react';

import './categories.scss';

type Props = {
    categoryId: number;
    onChangeCategory: (idx: number) => void;
}

const CATEGORIES = ['All', 'Tables', 'Sofas', 'Chairs', 'Carpet', 'Armchair'];

export const Categories = memo(({categoryId, onChangeCategory}: Props) => {
    const onCategoryClick = (idx: number) => () => {
        onChangeCategory(idx);
    };

    return (
        <div className="categories">
            <ul className="categories__container">
                {CATEGORIES.map((categoryName, i) => (
                    <li
                        key={categoryName}
                        onClick={onCategoryClick(i)}
                        className={`categories__item ${categoryId === i ? 'categories__item_active' : ''}`}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
});
