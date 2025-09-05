/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useField } from '@unform/core';
import TextInputMask from 'react-masked-text';

import { Container } from './styles';

interface InputMaskProps {
  kind: string;
  name: string;
  onChange?(event: any): void;
  onFocus?(event: any): void;
  onBlur?(event: any): void;
  value?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  options?: {
    mask?: string;
    format?: string;
    unit?: string;
    separator?: string;
    delimiter?: string;
  };
  required?: boolean;
}

const InputMask: React.FC<InputMaskProps> = ({
  kind,
  name,
  onChange,
  onFocus,
  onBlur,
  value,
  placeholder,
  id,
  className,
  options,
  required,
}) => {
  const maskRef = useRef<any>(null);
  const [newValue, setNewValue] = useState<undefined | string>(undefined);
  const [isFocuses, setIsFocuses] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: maskRef.current,
      path: 'props.value',
      clearValue: () => {
        setNewValue('');
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleChange = useCallback(
    (e: string) => {
      if (onChange && maskRef.current) {
        const data = {
          target: {
            name: maskRef.current.props.name,
            value: e,
          },
        };
        onChange(data);
      }
      setNewValue(e);
    },
    [onChange]
  );

  const handleFocus = useCallback(
    (e: any) => {
      setIsFocuses(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: any) => {
      setIsFocuses(false);
      if (onBlur) {
        onBlur(e);
      }
      setIsFilled(!!e.target.value);
    },
    [onBlur]
  );

  return (
    <>
      <Container
        className={className}
        isErrored={!!error}
        isFilled={isFilled}
        isFocuses={isFocuses}
      >
        <TextInputMask
          ref={maskRef}
          kind={kind}
          options={options}
          name={name}
          placeholder={placeholder}
          required={required}
          value={newValue}
          onChangeText={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          id={id}
        />
      </Container>
      {error && <span className="small text-danger error">{error}</span>}
    </>
  );
};

export default InputMask;
