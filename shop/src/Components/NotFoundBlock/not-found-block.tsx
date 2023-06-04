import React from 'react';

import styles from './NotFoundBlock.module.css';

export const NotFoundBlock: React.FC = () => (
    <h1 className={styles.root}>
        <span>😔</span>
        <br />
        Oops, nothing was found!
    </h1>
);
