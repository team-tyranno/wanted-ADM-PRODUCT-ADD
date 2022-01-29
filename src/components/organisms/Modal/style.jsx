import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  height: 200px;
  margin: -100px 0 0 -200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px;
  background-color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Body = styled.div`
  width: 100%;
  text-align: center;
`;
