import styled from 'styled-components';

export const Blocker = styled.div`
  width: 100%;
  height: 40px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 920px;
  border-bottom: 1px solid #ddd;
  padding: 6px 24px 4px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;

  button {
    position: relative;
    top: -1px;

    padding: 6px 4px;
    background-color: #3d0a91;
    color: #fff;
  }
`;
