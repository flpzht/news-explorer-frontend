import { useState } from 'react';

import '@/components/PopupWithForm/PopupWithForm.css';

function PopupWithForm({ isOpen, onClose }) {
    const [mode, setMode] = useState('login');

    function handleClose() {
        setMode('login');
        onClose();
    }

    function handleSwitchMode() {
        setMode(mode === 'login' ? 'register' : 'login');
    }

    if (!isOpen) return null;

    return (
        <div className="popup-with-form">
            <div className="popup-with-form__overlay" onClick={handleClose}>
                <div className="popup-with-form__container">
                    <button className="popup-with-form__close-button" type="button" aria-label="Fechar" onClick={handleClose} />

                    {mode === 'success' ? (
                        <>
                            <h2 className="popup-with-form__title popup-with-form__title_type_success">Cadastro concluído com sucesso!</h2>
                            <button className="popup-with-form__switch-link popup-with-form__switch-link_type_success" type='button' onClick={() => setMode('login')}>Entrar</button>
                        </>
                    ) : (
                        <>
                            <h2 className="popup-with-form__title">{mode === 'login' ? 'Entrar' : 'Inscrever-se'}</h2>

                            <form action="" className="popup-with-form__form" name="popup-with-form">

                                <label htmlFor="" className="popup-with-form__field"> E-mail
                                    <input className="popup-with-form__input" type="email" name='email' placeholder="Insira e-mail" required />
                                </label>

                                <label htmlFor="" className="popup-with-form__field"> Senha
                                    <input className="popup-with-form__input" type="password" name='password' placeholder="Insira a senha" required />
                                </label>
                                {mode === 'register' && (
                                  <label htmlFor="" className="popup-with-form__field"> Nome de usuário
                                    <input className="popup-with-form__input" type="text" name='usuario' placeholder="Insia seu nome de usuário" required />
                                </label>  
                                )}                                

                                <button className="popup-with-form__submit" type="submit">{mode === 'login' ? 'Entrar' : 'Inscrever-se'}</button>

                                <p className="popup-with-form__text">
                                    ou{' '}
                                    <button className="popup-with-form__switch-link" type="button" onClick={handleSwitchMode}>{mode === 'login' ? 'Inscrever-se' : 'Entrar'}</button>
                                </p>

                            </form>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
}

export default PopupWithForm;