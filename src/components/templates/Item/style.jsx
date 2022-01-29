import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;

  .item-title {
    width: 150px;
    margin: 0 auto;
    padding: 15px 0 0 10px;
    background: #dedede;
  }

  .item-content {
    flex: 1;
    padding: 5px 20px;
  }
`;
