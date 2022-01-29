import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  flex: 1;
  overflow: scroll;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  color: #dedede;
  font-size: 20px;
`;
