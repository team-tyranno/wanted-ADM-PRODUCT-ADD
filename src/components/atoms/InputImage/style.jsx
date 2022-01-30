import styled from 'styled-components';

export const Wrapper = styled.div`
  label {
    border: 1px solid #3d0a91;
    border-radius: 4px;
    padding: 12px 48px;
    font-size: 16px;
    cursor: pointer;

    input {
      display: none;
    }

    &:hover {
      background-color: #520dc1;
      color: #ffffff;
    }
  }
`;
