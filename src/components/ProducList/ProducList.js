import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ProductList.css';

import { getProduct } from 'store/actions';
import { dataSorting } from 'utils/helpers';
import { Card } from 'components';
import Pagination from 'components/Pagination/Pagination';

const postsPerPage = 12;

function ProducList() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const productList = useSelector((state) => state.product.data);
  const sort = useSelector((state) => state.sort.sort);
  const sideBarFilterData = useSelector((state) => state.product.sideBarFilterData);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    return () => {};
  }, [sideBarFilterData]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataSorting(productList, sort).slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="product-list">
        {currentPosts.map((product) => (
          <Card data={product} key={product.productId} onClick={(res) => {}} />
        ))}
      </div>
      {productList.length > 12 && (
        <Pagination
          paginate={(page) => setCurrentPage(page)}
          totalData={productList.length}
          dataPerPage={postsPerPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
}

export default ProducList;
