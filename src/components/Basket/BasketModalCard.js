import React from 'react';
import PropTypes from 'prop-types';

import './BasketModalCard.css';
import { Button, CardImage } from 'components';

function BasketModalCard({ data, onClickDelete }) {
  return (
    <div className="basketModalCard">
      <CardImage data={data} classes="basket-card-image" />
      <div className="basketModalCard--product_info">
        <div>
          <p>{data.title}</p>
          <p>{data.categoryName}</p>
        </div>
        {onClickDelete && (
          <Button
            classes="basket-modal_remove"
            onClick={() => onClickDelete({ ...data, isAddedBasket: false })}
          >
            Kaldır
          </Button>
        )}
      </div>
    </div>
  );
}

BasketModalCard.defaultProps = {
  data: {},
};

BasketModalCard.propTypes = {
  data: PropTypes.object,
  onClickDelete: PropTypes.func,
};

export default BasketModalCard;
