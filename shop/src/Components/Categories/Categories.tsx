import React, {memo} from 'react';

import './Categories.css';

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
            <ul>
                {CATEGORIES.map((categoryName, i) => (
                    <li
                        key={i}
                        onClick={onCategoryClick(i)}
                        className={categoryId === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
});
