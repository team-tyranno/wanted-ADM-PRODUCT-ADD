import styled from 'styled-components';

export const OptionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  background-color: #fff;
  font-size: 16px;

  div {
    margin-bottom: 15px;
  }

  .option-delete {
    margin-left: auto;

    button {
      padding: 6px 16px;
      font-size: 15px;
    }
  }

  .option-name input {
    width: calc(100% - 20px);
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 16px;
    font-size: 16px;
  }

  .option-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;

    input {
      height: 40px;
      margin-right: -10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding-left: 16px;
      font-size: 15px;

      &.price {
        width: 140px;
      }

      &.stock {
        width: 80px;
      }
    }

    select {
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0 6px;
      font-size: 15px;
    }

    &.appended {
      span {
        margin-right: -10px;
        color: #ddd;
        font-size: 36px;
      }

      input {
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding-left: 16px;
        font-size: 15px;

        &.name {
          width: 300px;
        }

        &.price {
          width: 200px;
          margin-right: -10px;
        }
      }

      button {
        height: 40px;
        padding: 6px 16px;
        font-size: 15px;
      }
    }
  }

  .option-append {
    display: flex;
    align-items: center;

    button {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0;
      background-color: #fff;
      font-size: 29px;
      cursor: pointer;
    }
  }
`;
