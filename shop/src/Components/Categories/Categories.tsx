import React, {memo} from 'react';

import './Categories.scss';

type Props = {
    categoryId: number;
    onChangeCategory: (idx: number) => void;
}

const CATEGORIES = ['All', 'Tables', 'Sofas', 'Chairs', 'Carpet', 'Armchair'];

export const Categories: React.FC<Props> = memo(({categoryId, onChangeCategory}) => {
    const onCategoryClick = (idx: number) => () => {
        onChangeCategory(idx);
    };

    return (
        <div className="categories">
            <ul className="categories__container">
                {CATEGORIES.map((categoryName, i) => (
                    <li
                        key={i}
                        onClick={onCategoryClick(i)}
                        className={`categories__item ${categoryId === i ? 'categories__item_active' : ''}`}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
});
