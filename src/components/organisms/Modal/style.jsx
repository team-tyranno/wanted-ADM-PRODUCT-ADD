import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  border: 1px solid #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin: -100px 0 0 -200px;
`;

export const Body = styled.div`
  width: 100%;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
