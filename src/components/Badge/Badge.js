import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';

function Badge({ color, content, ...otherProps }) {
  const classNames = ['Badge Badge-anchorOriginTopRightRectangle'];

  classNames.push(`Badge--${color}`);

  return (
    <span className={classNames.join(' ')} {...otherProps}>
      {content}
    </span>
  );
}

Badge.defaultProps = {
  color: 'primary',
  content: 0,
};

Badge.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf(['primary']),
};

export default Badge;
