import styled from 'styled-components';

export const Wrapper = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #4609ad;
  border-radius: 4px;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #4609ad;
    color: #fff;
  }
`;
