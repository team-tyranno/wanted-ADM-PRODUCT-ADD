import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  background-color: #fff;

  div {
    margin-block-end: 16px;

    &.delete-option {
      margin-left: auto;
    }

    &.option-name input {
      width: 100%;
      height: 42px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding-left: 12px;
      font-size: 16px;
    }

    &.option-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;

      span b {
        font-weight: 800;
      }

      input {
        height: 42px;
        margin-right: -20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding-left: 12px;
        font-size: 15px;

        &.price {
          width: 160px;
        }

        &.stock {
          width: 120px;
        }
      }

      select {
        width: 80px;
        height: 42px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 8px;
        font-size: 15px;
      }
    }

    &.suboption-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;

      span {
        margin-right: -20px;
        color: #ddd;
        font-size: 36px;
      }

      input {
        height: 42px;
        margin-right: -20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding-left: 12px;
        font-size: 15px;

        &.name {
          width: 400px;
        }

        &.price {
          width: 200px;
        }
      }
    }

    &.append-suboption {
      display: flex;
      align-items: center;
      margin-right: auto;
      cursor: pointer;

      button {
        width: 27px;
        height: 25px;
        margin-right: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 2px 0;
        background-color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
