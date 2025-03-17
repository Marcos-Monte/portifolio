
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Atenção</h1>
        <p>Esta página não é mais a oficial. Por favor, visite a nova página.</p>
        <a href="https://marcosmontedev.vercel.app/">Ir para a nova página</a>
      </div>
    </div>
  );
};

export default Modal;