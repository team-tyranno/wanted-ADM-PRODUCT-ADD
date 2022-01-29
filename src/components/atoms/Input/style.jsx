import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 100%;
`;

export const Inp = styled.input`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px 5px;

  &::placeholder {
    color: #d3d3d3;
    font-weight: bold;
  }
`;
