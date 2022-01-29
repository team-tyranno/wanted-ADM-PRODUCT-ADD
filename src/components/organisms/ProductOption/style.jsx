import styled from 'styled-components';

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 820px;
  margin: 72px 40px 40px;
  border: 1px solid #ddd;
  padding: 14px;

  .delete-set {
    position: absolute;
    top: -48px;
    right: 0;
    margin-left: auto;
  }
`;
