import './ImageModal.css';
import Modal from 'react-modal';
import { customStyles } from '../../helpers';
import { Images, ImageUrls, IModal } from '../../types/images';
import React from 'react';
Modal.setAppElement('#root');

interface ImageModal {
  modalData: IModal,
  modalIsOpen: boolean,
  closeModal: ()=> void,
}

export const ImageModal: React.FC<ImageModal> = ({ modalData, modalIsOpen, closeModal }) => {
  const { urls, description, likes, user } = modalData;

  return (
    <Modal
      id="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div>
        <img src={urls.regular} />
        <p>
          Author: {user.first_name} {user.last_name}
        </p>
        <p>Likes: {likes}</p>
        <p className="quote">Description: {description}</p>
      </div>
    </Modal>
  );
};
