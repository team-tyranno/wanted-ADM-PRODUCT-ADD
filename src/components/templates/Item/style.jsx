import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  .item--title {
    box-sizing: border-box;
    width: 10%;

    background: #dedede;
    padding: 15px 0 0 10px;
  }
  .item--content {
    flex: 1;

    padding: 5px 20px;
  }
`;
