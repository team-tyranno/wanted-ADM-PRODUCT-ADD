import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  input {
    width: 30px;
    height: 30px;

    outline: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    background: #fbfbfb;
  }

  input:checked {
    background-color: #000080;
  }

  span {
    position: relative;
    bottom: 6px;
    left: 10px;

    font-size: 20px;
    text-align: center;
  }
`;
