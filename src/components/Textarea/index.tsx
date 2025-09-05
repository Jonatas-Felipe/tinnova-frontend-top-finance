import React, {
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  padding?: string;
  height?: string;
}

const Textarea: FC<TextAreaProps> = ({
  name,
  padding,
  height,
  className,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocuses, setIsFocuses] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTextareaFocus = useCallback(() => {
    setIsFocuses(true);
  }, []);

  const handleTextareaBlur = useCallback(() => {
    setIsFocuses(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <Container
        className={`${isFocuses ? 'focuses ' : ''}${isFilled ? 'filled ' : ''}${
          error ? 'errored ' : ''
        }${className}`}
        padding={padding}
        height={height}
        isErrored={!!error}
        isFilled={isFilled}
        isFocuses={isFocuses}
      >
        <textarea
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>
      {error && <span className="small text-danger">{error}</span>}
    </>
  );
};

export default Textarea;
