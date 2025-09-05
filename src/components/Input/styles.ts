import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocuses: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 37px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  + div {
    margin-top: 8px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;

    .button-show {
      //width: 70px;
      font-size: 12px;
      text-align: center;
      background: none;
      border: 0;
      padding: 6px 6px 6px;

      //height: 52px;
      font-weight: bold;
    }
  }

  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #202020;
    transition-duration: 0.2s;

    ::placeholder {
      color: #aaaaaa;
    }

    :focus {
      border: none;
      outline: 0;
    }
  }

  img,
  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    opacity: 0;
  }

  input[type='date'] {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030 !important;
    `}

  ${(props) => props.isFilled && css``}

  ${(props) =>
    props.isFocuses &&
    css`
      border-color: #202020 !important;
    `}
`;
