import React from 'react';
import Modal from '@material-ui/core/Modal';

const modal = ({
  open,
  onClose,
  children,
}) => (
  <Modal
    open={open}
    onClose={onClose}
  >
    <div className="modal-container">
      {children}
    </div>
  </Modal>
);

export default modal;
