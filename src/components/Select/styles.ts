import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  height?: string;
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

  + div {
    margin-top: 8px;
  }

  div {
    width: 100%;
    position: relative;

    .button-show {
      width: 70px;
      font-size: 12px;
      text-align: center;
      background: none;
      border: 0;
      padding: 6px 6px 6px;
      color: #fa8009 !important;
      height: 52px;
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
      color: #d9d9d9;
    }

    :focus {
      border: none;
      outline: 0;
    }

    :disabled {
      opacity: 0.7;
    }
  }

  .options {
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    width: calc(100% + 2px);
    left: -1px;
    top: 35px;
    max-height: 200px;
    overflow: auto;
    z-index: 100;

    button {
      border: none;
      border-bottom: 1px solid #d9d9d9;
      background: transparent;
      transition-duration: 0.3s;
      color: #202020;
      min-height: 37px;

      :hover {
        background-color: ${darken(0.02, '#ffffff')};
      }
    }
  }

  svg {
    color: #202020;
    transition-duration: 0.2s;
    pointer-events: none;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) => props.isFilled && css``}

  ${(props) =>
    props.isFocuses &&
    css`
      color: #606060;
      border-color: #606060;
      border-radius: 4px 4px 0 0 !important;
    `}
`;
