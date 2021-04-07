import React from 'react';
import PropTypes from 'prop-types';

function CardProductTitle({ title }) {
  return <p className="product-title">{title}</p>;
}

CardProductTitle.propTypes = {
  title: PropTypes.string,
};

export default CardProductTitle;
