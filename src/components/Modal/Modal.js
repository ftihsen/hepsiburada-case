import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import { Button } from 'components';

function Modal({ open, onClickCancel, onClickSuccess, headerTitle, contentText, onDismiss }) {
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

  console.log(modalRef);

  return (
    <div className={classNames.join(' ')}>
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <p className="modal-header-text">{headerTitle}</p>
        </div>
        <div className="modal-body">
          <p className="modal-body-text">{contentText}</p>
        </div>
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
  contentText: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickSuccess: PropTypes.func,
};

export default Modal;
