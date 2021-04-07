import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import { Button } from 'components';

function Modal({ open, onClickCancel, onClickSuccess, headerTitle, onDismiss, children }) {
  const classNames = ['modal'];
  const modalRef = useRef();
  open && classNames.push(`modal-open`);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onDismiss();
    }
  };

  return (
    <div className={classNames.join(' ')}>
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <p className="modal-header-text">{headerTitle}</p>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <Button classes="small success" onClick={onClickSuccess}>
            Evet
          </Button>
          <Button classes="small error" onClick={onClickCancel}>
            Hayır
          </Button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
  headerTitle: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickSuccess: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
