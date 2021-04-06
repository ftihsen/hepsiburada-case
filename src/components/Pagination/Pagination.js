import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

function Pagination({ totalData, dataPerPage, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="Pagination">
        <li>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="Pagination--link"
          >
            {'<'}
          </button>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                href="!#"
                className={`Pagination--link ${currentPage === number && 'active'}`}
              >
                {number}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => pageNumbers.length > currentPage && paginate(currentPage + 1)}
            className="Pagination--link"
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalData: PropTypes.number,
  dataPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
