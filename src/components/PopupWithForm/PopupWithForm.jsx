import '@/components/PopupWithForm/PopupWithForm.css';

function PopupWithForm({
  title,
  submitText,
  switchText,
  isOpen,
  isValid,
  onSubmit,
  onClose,
  onSwitch,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="popup-with-form">
      <div className="popup-with-form__overlay">
        <div className="popup-with-form__container">
          <button className="popup-with-form__close-button" type="button" aria-label="Fechar" onClick={onClose} />

          <h2 className="popup-with-form__title">{title}</h2>

          <form className="popup-with-form__form" name="popup-with-form" onSubmit={onSubmit}>
            {children}

            <button className="popup-with-form__submit" type="submit" disabled={!isValid}>{submitText}</button>

            <p className="popup-with-form__text">
              ou{' '}
              <button className="popup-with-form__switch-link" type="button" onClick={onSwitch}>{switchText}</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;