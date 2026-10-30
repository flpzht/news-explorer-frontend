import { useEffect } from 'react';

import { useFormWithValidation } from '@/hooks/useFormWithValidation';

import { EMAIL_PATTERN } from '@/utils/constants';

import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

function Login({ isOpen, onClose, onSwitch, onLogin, serverError }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(values);
  }

  return (
    <PopupWithForm
      title="Entrar"
      submitText="Entrar"
      switchText="Inscrever-se"
      isOpen={isOpen}
      isValid={isValid}
      onSubmit={handleSubmit}
      onClose={onClose}
      onSwitch={onSwitch}
      serverError={serverError}
    >
      <label className="popup-with-form__field"> E-mail
        <input
          className="popup-with-form__input"
          type="email"
          pattern={EMAIL_PATTERN}
          name="email"
          placeholder="Insira e-mail"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span className="popup-with-form__error">{errors.email}</span>
      </label>

      <label className="popup-with-form__field"> Senha
        <input
          className="popup-with-form__input"
          type="password"
          name="password"
          placeholder="Insira a senha"
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <span className="popup-with-form__error">{errors.password}</span>
      </label>
    </PopupWithForm>
  );
}

export default Login;