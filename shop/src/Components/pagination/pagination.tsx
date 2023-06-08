import React from 'react';
import ReactPaginate from 'react-paginate';

import './pagination.scss';

type Props = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export const Pagination = ({currentPage, onChangePage}: Props) => (
    <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
    />
);
