import React from "react";
import ReactPaginate from "react-paginate";
import { IPagination } from "../../interfaces/pagination";
import "./styles.scss";

const Pagination: React.FC<IPagination> = ({
  setCurentPage,
  totalPage,
  currentPage,
}) => {
  const handlePageClick = (event: { selected: number }) => {
    setCurentPage(event.selected + 1);
  };

  return (
    <div className="paginate">
      <div className="paginate__paginate">
        <ReactPaginate
          activeClassName="pagination-active"
          forcePage={currentPage - 1}
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          nextLinkClassName="pagination-next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={totalPage - 1}
          previousLabel="<"
          previousLinkClassName="pagination-previous"
          renderOnZeroPageCount={null}
        />
      </div>

      <div className="paginate__input">Showing {totalPage - 1} results</div>
    </div>
  );
};

export default Pagination;
