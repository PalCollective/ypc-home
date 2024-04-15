import React from 'react';
import styles from './modal.module.css'; 

interface ModalProps {
  url: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ url, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={onClose} className={styles.closeButton}>&times;</span>
        <p>{url}</p> 
      </div>
    </div>
  );
};

export default Modal;
