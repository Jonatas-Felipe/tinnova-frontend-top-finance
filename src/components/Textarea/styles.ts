import styled, { css } from 'styled-components';

interface ContainerProps {
  padding?: string;
  height?: string;
  isFilled: boolean;
  isFocuses: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  opacity: 0.8;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${({ height }) => height || 'calc(100% - 32px)'};

  + div {
    margin-top: 8px;
  }

  textarea {
    padding: ${({ padding }) => padding || '5px'};
    flex: 1;
    background: transparent;
    border: 0;
    color: #18191a;
    transition-duration: 0.2s;
    height: 100%;
    resize: none;
    outline: 0;

    ::placeholder {
      color: #18191a;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
    transition-duration: 0.2s;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030 !important;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #18191a;
      }
    `}

  ${(props) =>
    props.isFocuses &&
    css`
      color: #18191a !important;
      border-color: #333333 !important;

      svg {
        color: #18191a;
      }
    `}
`;
