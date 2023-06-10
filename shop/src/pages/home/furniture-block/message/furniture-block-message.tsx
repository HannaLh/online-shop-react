import React from 'react';
import './furniture-block-message.scss';
import type {ReactNode} from 'react';

type Props = {
    title: ReactNode,
    description: ReactNode,
};

export const FurnitureBlockMessage = ({title, description}: Props) => (
    <div className="furniture-block-message">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);
