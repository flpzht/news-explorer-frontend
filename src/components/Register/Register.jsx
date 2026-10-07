import { useEffect } from 'react';

import { useFormWithValidation } from '@/hooks/useFormWithValidation';

import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

function Register({ isOpen, onClose, onSwitch }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <PopupWithForm
      title="Inscrever-se"
      submitText="Inscrever-se"
      switchText="Entrar"
      isOpen={isOpen}
      isValid={isValid}
      onSubmit={handleSubmit}
      onClose={onClose}
      onSwitch={onSwitch}
    >
      <label className="popup-with-form__field"> E-mail
        <input
          className="popup-with-form__input"
          type="email"
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
          minLength={8}
          required
        />
        <span className="popup-with-form__error">{errors.password}</span>
      </label>

      <label className="popup-with-form__field"> Nome de usuário
        <input
          className="popup-with-form__input"
          type="text"
          name="name"
          placeholder="Insira seu nome de usuário"
          value={values.name || ''}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          required
        />
        <span className="popup-with-form__error">{errors.name}</span>
      </label>
    </PopupWithForm>
  );
}

export default Register;