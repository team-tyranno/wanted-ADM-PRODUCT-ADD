import styled from 'styled-components';

export const Btn = styled.button`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}` || 'inherit'};
  border: 1px solid #0e0c32;
  border-radius: 5px;
  padding: 8px 5px;
  background: #fff;
  cursor: pointer;
`;
