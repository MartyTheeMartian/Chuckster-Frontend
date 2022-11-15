interface ModalInterface {
  setAppElement: (domElement: string) => void;
}

export default function setModal(Modal: ModalInterface): void {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
}
