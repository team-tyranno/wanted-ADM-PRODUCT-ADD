import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function ButtonDelete({ width, height }) {
  return (
    <S.Wrapper type="button" width={width} height={height}>
      삭제
    </S.Wrapper>
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
