import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  min-height: 750px;
  padding-top: 32px;
  background-color: rgba(238, 238, 238, 0.5);

  .append-set {
    position: absolute;
    top: -41px;
    right: 0;
  }

  .default-text {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 820px;
  margin: 40px 30px;
  border: 1px solid #ddd;
  padding: 14px;
  background-color: #fff;

  .delete-set {
    position: absolute;
    top: -48px;
    right: 0;
    margin-left: auto;
  }
`;
