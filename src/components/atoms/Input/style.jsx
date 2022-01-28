import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.width};
`;

export const Inp = styled.input`
  position: relative;

  flex: 1 1 auto;
  padding: 10px 5px;

  border: 1px solid #eee;
  border-radius: 5px;

  &::placeholder {
    color: #d3d3d3;
    font-weight: bold;
  }
  width: 100%;
`;
