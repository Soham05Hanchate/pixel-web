import React from 'react';

const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
      <div className="card" style={{ width: '90%', maxWidth: '500px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', right: '15px', top: '15px', background: 'none', border: 'none', fontSize: '1.2rem' }}>&times;</button>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;