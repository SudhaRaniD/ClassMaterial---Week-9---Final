import React, { Component }  from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/index';

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient"
        variants={{
          hidden: {
            y: '-100vh',
            opacity: 0,
          },
          visible: {
            y: '0',
            opacity: 1,
            transition: {
              duration: 0.1,
              type: 'spring',
              damping: 25,
              stiffness: 500,
            },
          },
          exit: {
            y: '100vh',
            opacity: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-text">
          <h3>Header of Modal</h3>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laboriosam labore, totam expedita voluptates tempore asperiores
            sequi, alias cum veritatis, minima dolor iste similique eos id.
            Porro, culpa? Officiis, placeat?
          </h5>
        </div>
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalButton = ({ onClick, label }) => (
  <motion.button
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
