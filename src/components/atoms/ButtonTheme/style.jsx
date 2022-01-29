import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin-bottom: 20px;
  border: 1px solid #460aad;
  border-radius: 4px;
  padding: 10px 20px;

  background-color: #eee;
  color: #000;
  font-size: 15px;

  button {
    position: absolute;
    right: 30px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  img {
    width: 10px;
    height: 10px;
  }
`;
