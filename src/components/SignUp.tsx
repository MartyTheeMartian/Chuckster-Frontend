import { useState } from 'react';
import Modal from 'react-modal';
import setModal from 'config/modal';
import './SignUp.css';


setModal(Modal);

export default function SignUp(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  const displayModal = (): void => setModalVisible(true);
  const closeModal = (): void => setModalVisible(false);

  return (
    <div>
      <button
        type='button'
        onClick={displayModal}>
        Sign Up Here!
      </button>
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        contentLabel='Example Modal'>
        <button
          className='modal-close-btn'
          type='button'
          onClick={closeModal}>
          X
        </button>
        <h2>
          Sign Up
        </h2>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}
