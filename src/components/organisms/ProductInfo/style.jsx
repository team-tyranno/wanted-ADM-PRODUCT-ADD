import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #e5e5e5;
`;

export const Wrap = styled.div`
  margin-bottom: 20px;
  border: 1px solid #c4c4c4;
  padding: 30px;
  background-color: #fff;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;
