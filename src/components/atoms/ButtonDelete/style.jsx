import styled from 'styled-components';

export const Wrapper = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #dc3444;
  border-radius: 4px;
  background-color: #fff;
  color: #dc3444;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #dc3444;
    color: #ffffff;
  }
`;
