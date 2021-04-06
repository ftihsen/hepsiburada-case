import React from 'react';
import PropTypes from 'prop-types';

import './SelectBox.css';

function SelectBox({ classes, data, selectedItem, onClick, children, ...otherProps }) {
  const classNames = ['select-box'];

  classNames.push(`select-box-${classes}`);

  return (
    <div className="select-box-container">
      <button className={classNames.join(' ')} {...otherProps}>
        {children}
        <svg
          width="11"
          height="5"
          viewBox="0 0 11 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.34375 0L5.34375 5L10.3438 0L0.34375 0Z" fill="#BDBDBD" />
        </svg>
      </button>
      <ul className="select-box-content">
        {data.map((item, index) => (
          <li key={index} className={`${selectedItem.id === item.id && 'active'}`}>
            <button onClick={() => onClick(item)} className="option">
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectBox.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  data: PropTypes.array,
  onClick: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default SelectBox;
