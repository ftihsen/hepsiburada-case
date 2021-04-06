import React from 'react';
import PropTypes from 'prop-types';
import { priceFormat } from 'utils/helpers';

function CardProductPrice({ price, currentPrice, discountRate }) {
  return (
    <div className="productPrice">
      <p className="productPrice-current-price">{priceFormat(price)} TL</p>
      <div>
        <span className="productPrice-price">{priceFormat(currentPrice)} TL</span>
        <span className="productPrice-discount-rate">{discountRate}%</span>
      </div>
    </div>
  );
}

CardProductPrice.propTypes = {
  price: PropTypes.number,
  currentPrice: PropTypes.number,
  discountRate: PropTypes.number,
};

export default CardProductPrice;
