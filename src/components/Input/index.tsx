import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
  hasError?(hasError: boolean): void;
}

const Input: FC<InputProps> = ({
  name,
  hasError,
  className,
  type,
  onFocus,
  onBlur,
  error: errorData,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocuses, setIsFocuses] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [typeInput, setTypeInput] = useState('password');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (hasError) {
      hasError(!!error);
    }
  }, [error, hasError]);

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onFocus) {
        onFocus(e);
      }
      setIsFocuses(true);
    },
    [onFocus]
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e);
      }
      setIsFocuses(false);
      setIsFilled(!!inputRef.current?.value);
    },
    [onBlur]
  );

  const handleClick = useCallback(() => {
    setTypeInput((state) => (state === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <>
      <Container
        className={className}
        isErrored={!!error}
        isFilled={isFilled}
        isFocuses={isFocuses}
      >
        <div>
          {type !== 'password' ? (
            <input
              name={fieldName}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              ref={inputRef}
              type={type || 'text'}
              {...rest}
            />
          ) : (
            <input
              name={fieldName}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              ref={inputRef}
              type={typeInput}
              {...rest}
            />
          )}
          {type === 'password' && (
            <button type="button" className="button-show" onClick={handleClick}>
              {typeInput === 'password' ? 'Mostrar' : 'Esconder'}
            </button>
          )}
        </div>
      </Container>
      {(errorData || error) && (
        <span className="small text-danger error">{errorData || error}</span>
      )}
    </>
  );
};

export default Input;
