import ProductCard from "./product-card";
import productList from "../data/products.json";
import Pagination from "./pagination";
import { useState } from "react";

export default function ProductListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const lastPage = Math.ceil(productList.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previousPage = (pageNumber) => {
    if (pageNumber > 1) {
      return setCurrentPage(pageNumber - 1);
    }
  };
  const nextPage = (pageNumber) => {
    if (pageNumber < lastPage) {
      return setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <>
      <ProductCard products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productList.length}
        paginate={paginate}
        activePage={currentPage}
        previousPage={() => previousPage(currentPage)}
        firstPage={1}
        nextPage={() => nextPage(currentPage)}
        lastPage={lastPage}
      />
      {/* <a onClick={() => nextPage(currentPage)} href="!#">
        <img src={iconArrowRight} alt="" />
      </a> */}
    </>
  );
}
