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

  + div {
    margin-top: 8px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
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

  svg {
    margin-right: 16px;
    color: #18191a;
    transition-duration: 0.2s;
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
