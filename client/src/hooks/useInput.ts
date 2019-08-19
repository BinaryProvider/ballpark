import { useState } from 'react';

type ChangeEventCallback = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

interface InputInterface {
  value: string | number | string[];
  setValue: Function;
  isValid: boolean;
  setIsValid: Function;
  isTouched: boolean;
  setIsTouched: Function;
  isDirty: boolean;
  setIsDirty: Function;
  validate: Function;
  validationClasses: Function;
  reset: Function;
  bind: InputBinding;
}

interface InputBinding {
  value: string | number | string[];
  onBlur: () => void;
  onChange: ChangeEventCallback;
}

export const useInput = (
  initialValue: string | number | string[],
  required = false
): InputInterface => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(!required);
  const [isTouched, setIsTouched] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const validate = (): boolean => {
    setIsDirty(true);
    setIsTouched(true);

    if (required && typeof value != 'undefined' && value) {
      setIsValid(false);
      return isValid;
    } else {
      setIsValid(!required);
    }

    return isValid;
  };

  const validationClasses = (): string => {
    if (isDirty && required && typeof value != 'undefined' && value) {
      return isTouched ? 'is-valid' : '';
    }
    return required && isTouched ? 'is-invalid' : '';
  };

  const reset = (): void => {
    setIsDirty(false);
    setIsTouched(false);
    setValue('');
  };

  return {
    value,
    setValue,
    isValid,
    setIsValid,
    isTouched,
    setIsTouched,
    isDirty,
    setIsDirty,
    validate,
    validationClasses,
    reset,
    bind: {
      value,
      onBlur: (): void => {
        setIsTouched(true);
      },
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void => {
        setIsDirty(true);

        if (required) {
          setIsValid(event.target.value.length !== 0);
        }

        setValue(event.target.value);
      }
    }
  };
};
