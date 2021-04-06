import React from 'react';
import { SelectBox } from 'components';
import { useDispatch, useSelector } from 'react-redux';

import './SubHeader.css';
import { sortData } from 'contants/enums';
import { sortProduct } from 'store/actions';

function SubHeader() {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.sort.sort);
  const search = useSelector((state) => state.product.search);

  return (
    <div className="subheader">
      <div className="subheader-left">
        <p className="subheader-title">iPhone iOS cep telefonu</p>
        <div className="subheader-subtitle">
          <span>Aranan Kelime:</span>
          <span className="subheader-subtitle-search"> {search ? search : '-'}</span>
        </div>
      </div>
      <div>
        <SelectBox
          classes="primary"
          data={sortData}
          onClick={(item) => dispatch(sortProduct(item))}
          selectedItem={sort}
        >
          Sırala
        </SelectBox>
      </div>
    </div>
  );
}

export default SubHeader;
