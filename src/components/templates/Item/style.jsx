import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100%;
  border: 1px solid #eee;

  .item--title {
    text-alin: center;

    box-sizing: border-box;
    width: 150px;
    margin: 0 auto;

    background: #dedede;
    padding: 15px 0 0 10px;
  }
  .item--content {
    flex: 1;
    padding: 5px 20px;
  }
`;
