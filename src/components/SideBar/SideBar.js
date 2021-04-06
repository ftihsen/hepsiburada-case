import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './SideBar.css';
import { filterProduct, sortProduct } from 'store/actions';
import { sortData } from 'contants/enums';

const SideBarFilterHeaderTitle = ({ title }) => {
  SideBarFilterHeaderTitle.propTypes = {
    title: PropTypes.string,
  };

  return <p className="sideBar-header-title">{title}</p>;
};

const SideBarFilterItem = ({ title, item, filterOnClick, activeIndex }) => {
  SideBarFilterItem.propTypes = {
    title: PropTypes.string,
    item: PropTypes.object,
    filterOnClick: PropTypes.func,
    activeIndex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  };

  return (
    <button
      onClick={() => filterOnClick(item)}
      className={`sideBar-header-item ${activeIndex && 'active'} `}
    >
      {title}
    </button>
  );
};

function SideBar() {
  const dispatch = useDispatch();

  const sideBarData = useSelector((state) => state.product.sideBarData);
  const sideBarFilterData = useSelector((state) => state.product.sideBarFilterData);
  const sort = useSelector((state) => state.sort.sort);

  const groupBy = (key, id) => () =>
    sideBarData.reduce((objectsByKeyValue, obj) => {
      if (objectsByKeyValue.findIndex((t) => t.id === obj[id]) < 0) {
        return [
          ...objectsByKeyValue,
          {
            text: obj[key],
            id: obj[id],
            selectorName: id,
            totalCount: sideBarData.filter((t) => t[id] === obj[id]).length,
          },
        ];
      }
      return objectsByKeyValue;
    }, []);

  const groupByBrand = groupBy('brand', 'brandId');
  const groupByColor = groupBy('color', 'colorId');

  return (
    <aside className="sideBar">
      <>
        <SideBarFilterHeaderTitle title="Renk" />
        {groupByColor().map((item) => {
          return (
            <SideBarFilterItem
              filterOnClick={(filter) => dispatch(filterProduct(filter))}
              key={item.id}
              title={`${item.text} (${item.totalCount})`}
              item={item}
              activeIndex={sideBarFilterData.text === item.text}
            />
          );
        })}
      </>
      <>
        <SideBarFilterHeaderTitle title="Sıralama" />
        {sortData.map((item) => (
          <SideBarFilterItem
            filterOnClick={(filter) => dispatch(sortProduct(filter))}
            key={item.id}
            title={item.text}
            item={item}
            activeIndex={sort.id === item.id}
          />
        ))}
      </>
      <>
        <SideBarFilterHeaderTitle title="Marka" />
        {groupByBrand().map((item) => {
          return (
            <SideBarFilterItem
              filterOnClick={(filter) => dispatch(filterProduct(filter))}
              key={item.id}
              title={`${item.text} (${item.totalCount})`}
              item={item}
              activeIndex={sideBarFilterData.text === item.text}
            />
          );
        })}
      </>
    </aside>
  );
}

export default SideBar;
