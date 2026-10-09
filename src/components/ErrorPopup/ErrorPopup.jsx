import { usePopupClose } from '@/hooks/usePopupClose';
import { REQUEST_ERROR_MESSAGE } from '@/utils/constants';

import '@/components/PopupWithForm/PopupWithForm.css';

function ErrorPopup({ isOpen, onClose }) {
  const { handleOverlayClick } = usePopupClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="popup-with-form">
      <div className="popup-with-form__overlay" onMouseDown={handleOverlayClick}>
        <div className="popup-with-form__container">
          <button className="popup-with-form__close-button" type="button" aria-label="Fechar" onClick={onClose} />

          <h2 className="popup-with-form__title popup-with-form__title_type_success">{REQUEST_ERROR_MESSAGE}</h2>
        </div>
      </div>
    </div>
  );
}

export default ErrorPopup;