import React from 'react';
import PropTypes from 'prop-types';

import './CardImage.css';

function CardImage({ data, classes }) {
  const classNames = ['CardImage'];

  classNames.push(`CardImage--${classes}`);

  return (
    <figure className={classNames.join(' ')}>
      <img src={`assets/img/product/phone/${data.imgUrl}`} alt={data.title} />
    </figure>
  );
}

CardImage.propTypes = {
  classes: PropTypes.string,
  data: PropTypes.object,
};

export default CardImage;
