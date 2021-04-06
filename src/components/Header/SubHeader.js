import React from 'react';
import { SelectBox } from 'components';
import { useDispatch, useSelector } from 'react-redux';

import './SubHeader.css';
import { sortData } from 'contants/enums';
import { sortProduct } from 'store/actions';

function SubHeader() {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.sort.sort);

  return (
    <div style={{ display: 'flex', flex: 1, height: 52, margin: '17px 0', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p className="SubHeader--title">iPhone iOS cep telefonu</p>
        <div className="SubHeader--subtitle">
          <span>Aranan Kelime:</span>
          <span className="SubHeader--subtitle_search"> iphone 11</span>
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
