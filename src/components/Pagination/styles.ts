import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  > div {
    min-width: 270px;
    max-width: 400px;
    width: 100%;

    small {
      color: #6b6b6b;
    }

    select {
      border: none;
      border-bottom: 1px solid #7c7c7c;
      color: #ababab;
      font-size: 90%;
    }

    .btn-pagination {
      width: 35px;
      height: 35px;
      color: #000;
      font-family: 'inter';
      font-size: 14px;
      font-weight: 700;
      padding: 0 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition-duration: 0.3s;

      svg {
        transition-duration: 0.3s;
      }

      :hover {
        background-color: #6161ff;
        color: #fff;

        svg {
          fill: #fff;
        }
      }
    }

    .ellipsis{
      border: none !important;
    }

    .selected {
      background-color: #6161ff;
      color: #fff;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0 10px;
    > div .btn-pagination {
      margin: 0 10px;
    }

    > div {
      min-width: 320px;
      max-width: 400px;
      width: 100%;
    }
  }
`;
