import React from 'react';
import PropTypes from 'prop-types';

function CardProductFilters({ title, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <span className="product-filter-key">{title}:</span>
      <span className="product-filter-value">{value}</span>
    </div>
  );
}

CardProductFilters.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default CardProductFilters;
