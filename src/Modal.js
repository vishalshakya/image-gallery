// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Selected" />
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
