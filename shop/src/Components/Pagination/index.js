import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.css'

export default function Pagination({currentPage, onChangePage}) {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            forcePage={currentPage - 1}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}
