import React from 'react';

import styles from './NotFoundBlock.module.css'

export default function  NotFoundBlock() {
    return (
        <h1 className={styles.root}>
            <span>😔</span>
            <br />
            Oops, nothing was found!
        </h1>

    )
}
