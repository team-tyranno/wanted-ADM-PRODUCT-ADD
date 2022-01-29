import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 16px;
  border-radius: 50px;

  transition: background 0.2s linear;
  background: linear-gradient(to right, #aea8e6 50%, #9f9f9f 50%);
  background-size: 200% 100%;
  background-position: ${(props) => (props.isChecked ? 'left' : 'right')};
  background-color: ${(props) => (props.isChecked ? '#aea8e6' : '#9f9f9f')};
`;

export const Ball = styled.div`
  position: absolute;
  top: -3px;
  left: 0px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  box-shadow: -0.5px 0.5px 2px rgba(0, 0, 0, 0.6);

  transition: transform 0.2s linear;
  transform: translateX(${(props) => (props.isChecked ? '29px' : '0px')});
  background-color: ${(props) => (props.isChecked ? '#4224bd' : '#fafafa')};
`;
