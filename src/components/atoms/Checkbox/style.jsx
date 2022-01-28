import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  input {
    width: 30px;
    height: 30px;

    outline: none;
    border: 1px solid #eeeeee;
    border-radius: 2px;
    background: #fbfbfb;
  }

  input:checked {
    background-color: #000080;
  }

  span {
    position: relative;
    text-align: center;
    font-size: 20px;

    bottom: 6px;
    left: 10px;
  }
`;
