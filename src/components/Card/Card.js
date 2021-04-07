import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import { Button, CardProductFilters, CardProductPrice, CardProductTitle } from 'components';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/actions';

function Card({ data, onClick }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-action-container">
        <div className="image-container">
          <img src={`assets/img/product/phone/${data.imgUrl}`} alt={data.title} />
        </div>
        <div className="product-action-button">
          <span>Apple iPhone 11 Pro </span>
          <Button
            disabled={data.isAddedBasket}
            onClick={() => dispatch(addToCart({ ...data, isAddedBasket: true }))}
            classes={`cart button-add-to-cart`}
          >
            {!data.isAddedBasket ? 'Sepete Ekle' : 'Bu ürünü sepete ekleyemezsiniz.'}
          </Button>
        </div>
      </div>

      <div className="card-product-info">
        <CardProductTitle title={data.title} />
        <CardProductFilters title="Marka" value={data.brand} />
        <CardProductFilters title="Renk" value={data.color} />
        <CardProductPrice
          price={data.price}
          currentPrice={data.currentPrice}
          discountRate={data.discountRate}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;
