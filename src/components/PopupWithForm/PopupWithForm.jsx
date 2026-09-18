import { useState } from 'react';

import '@/components/PopupWithForm/PopupWithForm.css';

function PopupWithForm({ isOpen, onClose }) {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    function handleClose() {
        setMode('login');
        setEmail('');
        setPassword('');
        setUserName('');
        onClose();
    }

    function handleSwitchMode() {
        setMode(mode === 'login' ? 'register' : 'login');
        setEmail('');
        setPassword('');
        setUserName('');
    }

    const isEmailValid = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const isPasswordValid = password.length >= 8;
    const isUserNameValid = userName.length >= 2;

    const isFormValid = mode === 'login' ? isEmailValid && isPasswordValid : isEmailValid && isPasswordValid && isUserNameValid;

    if (!isOpen) return null;

    return (
        <div className="popup-with-form">
            <div className="popup-with-form__overlay">
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

                            <form action="" className="popup-with-form__form" name="popup-with-form"> {/*Fase 3: adicionar onSubmit real (login/registro via API) no <form> abaixo */}

                                <label className="popup-with-form__field"> E-mail
                                    <input className="popup-with-form__input" type="email" name='email' placeholder="Insira e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </label>

                                <label className="popup-with-form__field"> Senha
                                    <input className="popup-with-form__input" type="password" name='password' placeholder="Insira a senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </label>
                                {mode === 'register' && (
                                  <label className="popup-with-form__field"> Nome de usuário
                                    <input className="popup-with-form__input" type="text" name='usuario' placeholder="Insia seu nome de usuário"  value={userName} onChange={(e) => setUserName(e.target.value)} required />
                                </label>  
                                )}                                

                                <button className="popup-with-form__submit" type="submit" disabled={!isFormValid}>{mode === 'login' ? 'Entrar' : 'Inscrever-se'}</button>

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