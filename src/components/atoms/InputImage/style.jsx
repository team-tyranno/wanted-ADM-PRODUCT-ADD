import styled from 'styled-components';

export const Wrapper = styled.div`
  label {
    border: 1px solid #4609ad;
    border-radius: 4px;
    padding: 12px 48px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #4609ad;
      color: #ffffff;
    }
  }
  input {
    display: none;
  }
`;
