import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 12px;
  border: 1px solid #4609ad;
  border-radius: 4px;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #4609ad;
    color: #ffffff;
  }
`;
