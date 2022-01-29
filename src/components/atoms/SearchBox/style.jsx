import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => props.show};

  width: 100%;
  min-height: 200px;
  border: 1px solid #eee;
  word-break: break-all;
`;
