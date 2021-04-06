import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ classes, children, ...otherProps }) {
  const classNames = ['button'];

  classNames.push(`button-${classes}`);

  return (
    <button className={classNames.join(' ')} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};

export default Button;
