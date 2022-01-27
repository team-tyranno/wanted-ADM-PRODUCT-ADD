import styled from 'styled-components';

export const UploaderWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  margin: 12px;
  border: 1px solid #ddd;
  background-color: #dedede;

  label {
    border: 1px solid #4609ad;
    border-radius: 4px;
    padding: 12px 48px;
    font-size: 16px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
