import '@/components/PopupWithForm/PopupWithForm.css';

function PopupWithForm({ title, buttonText, switchText, switchLinkText, children }) {
    return (
        <div className="popup-with-form">
            <div className="popup-with-form__container">
                <button
                    className="popup-with-form__close-button"
                    type="button"
                    aria-label="Fechar"
                >
                </button>

                <h2 className="popup-with-form__title">{title}</h2>

                <form className="popup-with-form__form" noValidate>
                    {children}

                    <button className="popup-with-form__submit" type="submit">
                        {buttonText}
                    </button>

                    <p className="popup-with-form__switch-text">
                        {switchText}{' '}
                        <button className="popup-with-form__switch-link" type="button">
                            {switchLinkText}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;