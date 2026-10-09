import { useState, useCallback } from 'react';

import { VALIDATION_MESSAGES } from '@/utils/constants';

function getErrorMessage(input) {
  const { validity, minLength, validationMessage } = input;

  if (validity.valid) return '';
  if (validity.valueMissing) return VALIDATION_MESSAGES.REQUIRED;
  if (validity.typeMismatch || validity.patternMismatch) return VALIDATION_MESSAGES.INVALID_EMAIL;
  if (validity.tooShort) return `${VALIDATION_MESSAGES.TOO_SHORT} ${minLength}`;

  return validationMessage;
}

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    const message = getErrorMessage(event.target);

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: message }));
    setIsValid(event.target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [],
  );

  return { values, errors, isValid, handleChange, resetForm };
}
