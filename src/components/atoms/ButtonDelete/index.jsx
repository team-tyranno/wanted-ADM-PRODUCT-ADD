import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style';

export function ButtonDelete({ width, height, borderColor, onClick }) {
  return (
    <ButtonWrapper
      type="button"
      width={width}
      height={height}
      borderColor={borderColor}
      onClick={onClick}
    >
      삭제
    </ButtonWrapper>
  );
}

ButtonDelete.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonDelete.defaultProps = {
  width: null,
  height: null,
  borderColor: null,
  onClick: null,
};
