import { iconArrowLeft, iconArrowRight } from "../helpers/icons";
import "../styles/pagination.scss";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
  previousPage,
  firstPage,
  nextPage,
  lastPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginationWrapper">
      <a
        onClick={previousPage}
        className={`nextPrevious ${
          activePage === firstPage ? "nextPreviousDisabled" : ""
        }`}
        href="!#"
      >
        <img src={iconArrowLeft} alt="" />
      </a>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pageItem">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={`pageLink ${
                activePage === number ? "pageLinkActive" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <a
        onClick={nextPage}
        className={`nextPrevious ${
          activePage === lastPage ? "nextPreviousDisabled" : ""
        }`}
        href="!#"
      >
        <img src={iconArrowRight} alt="" />
      </a>
    </nav>
  );
};

export default Pagination;
