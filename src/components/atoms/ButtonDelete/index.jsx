import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style';

export function ButtonDelete({ width, height }) {
  return (
    <ButtonWrapper type="button" width={width} height={height}>
      삭제
    </ButtonWrapper>
  );
}

ButtonDelete.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ButtonDelete.defaultProps = {
  width: null,
  height: null,
};
