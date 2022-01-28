import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  padding: 30px;
`;

export const Wrap = styled.div`
  border: 1px solid #c4c4c4;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  gap: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;
