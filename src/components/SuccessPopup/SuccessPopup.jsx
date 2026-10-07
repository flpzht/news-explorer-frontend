import '@/components/PopupWithForm/PopupWithForm.css';

function SuccessPopup({ isOpen, onClose, onSwitch }) {
  if (!isOpen) return null;

  return (
    <div className="popup-with-form">
      <div className="popup-with-form__overlay">
        <div className="popup-with-form__container">
          <button className="popup-with-form__close-button" type="button" aria-label="Fechar" onClick={onClose} />

          <h2 className="popup-with-form__title popup-with-form__title_type_success">Cadastro concluído com sucesso!</h2>

          <button className="popup-with-form__switch-link popup-with-form__switch-link_type_success" type="button" onClick={onSwitch}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;