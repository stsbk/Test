import React from 'react';

const Pagination = () => {
    return (
      <nav aria-label="...">
          <ul className="pagination pagination-md">
              <li className="page-item">
                  <a className="page-link" href="#" tabIndex="-1">-</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">100</a></li>
              <li className="page-item"><a className="page-link" href="#">+</a></li>
          </ul>
      </nav>
    );
};

export default Pagination;
