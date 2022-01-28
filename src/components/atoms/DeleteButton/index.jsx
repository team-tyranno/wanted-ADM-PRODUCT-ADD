import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style';

export function DeleteButton({ width, height }) {
  return (
    <ButtonWrapper type="button" width={width} height={height}>
      삭제
    </ButtonWrapper>
  );
}

DeleteButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

DeleteButton.defaultProps = {
  width: null,
  height: null,
};
