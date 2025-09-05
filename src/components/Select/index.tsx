import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IoIosArrowDown } from 'react-icons/io';

import { Container } from './styles';

export interface IOption {
  id: string;
  value: string;
  selected: boolean;
  notSelectable?: boolean;
}

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  height?: string;
  options: IOption[];
  readOnly?: boolean;
  onChangeText?(value: string): void;
  hasError?(hasError: boolean): void;
}

const Input: FC<SelectProps> = ({
  name,
  height,
  hasError,
  className,
  options,
  onFocus,
  onBlur,
  readOnly,
  onChange,
  onChangeText,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<IOption[]>(options);
  const [optionSelected, setOptionSelected] = useState('');
  const [valueSelected, setValueSelected] = useState('');
  const [isFocuses, setIsFocuses] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue() {
        const valueFound = values.find((value) => value.value === 'Selecione');
        if (valueFound) {
          const newValue = values.map((value) => {
            if (value.id === valueFound.id) {
              return {
                ...value,
                selected: true,
              };
            }

            return {
              ...value,
              selected: false,
            };
          });

          setValues(newValue);
          setOptionSelected(valueFound.id);

          setValueSelected(valueFound.value);
        } else {
          setOptionSelected('');
          setValueSelected('');
        }
      },
    });
  }, [fieldName, registerField, values]);

  useEffect(() => {
    if (hasError) {
      hasError(!!error);
    }
    setValues(options);
  }, [error, hasError, options]);

  useEffect(() => {
    const selectedOption = values.find(
      (option) => option.selected || option.id === defaultValue
    );
    if (selectedOption) {
      if (selectedOption.value === 'Selecione') {
        if (!isFocuses) {
          setOptionSelected(selectedOption.id);
          setValueSelected(selectedOption.value);
        }
      } else {
        setOptionSelected(selectedOption.id);
        setValueSelected(selectedOption.value);
      }
    }
  }, [defaultValue, isFocuses, values]);

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value === 'Selecione') {
        setValueSelected('');
      }
      if (onFocus) {
        onFocus(e);
      }
      setIsFocuses(true && !readOnly);
    },
    [onFocus, readOnly]
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!value) {
        setValueSelected('Selecione');
      }
      if (onBlur) {
        onBlur(e);
      }
      setTimeout(() => {
        setIsFocuses(false);
      }, 300);
      setIsFilled(!!inputRef.current?.value);
    },
    [onBlur]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (onChangeText) {
        onChangeText(value);
      }
      setValueSelected(value);
    },
    [onChangeText]
  );

  const handleClick = useCallback(
    (option: IOption) => {
      setOptionSelected(option.id);
      setValueSelected(option.value);

      const newValues: IOption[] = values.map((optionData) => {
        if (optionData.id === option.id) {
          return {
            id: optionData.id,
            value: optionData.value,
            selected: true,
            notSelectable: optionData.notSelectable,
          };
        }

        return {
          id: optionData.id,
          value: optionData.value,
          selected: false,
          notSelectable: optionData.notSelectable,
        };
      });

      setValues(newValues);

      if (onChange) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange(option as any);
      }
    },
    [onChange, values]
  );

  return (
    <>
      <Container
        className={`${className} position-relative`}
        height={height}
        isErrored={!!error}
        isFilled={isFilled}
        isFocuses={isFocuses}
      >
        <div className="d-flex">
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleChange}
            autoComplete="off"
            value={valueSelected}
            readOnly={readOnly}
            {...rest}
          />
          <input
            type="hidden"
            name={name}
            defaultValue={defaultValue}
            ref={inputRef}
            value={optionSelected}
          />
          <IoIosArrowDown size={24} color="#808080" />
        </div>
        {isFocuses && (
          <div className="position-absolute options">
            {values.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleClick(option)}
                className="w-100"
                disabled={option.notSelectable}
              >
                {option.value}
              </button>
            ))}
          </div>
        )}
      </Container>
      {error && <span className="small text-danger error">{error}</span>}
    </>
  );
};

export default Input;
