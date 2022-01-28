import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: 1px solid #eee;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  padding: 20px;
  overflow: scroll;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  font-size: 20px;
  color: #dedede;
`;
