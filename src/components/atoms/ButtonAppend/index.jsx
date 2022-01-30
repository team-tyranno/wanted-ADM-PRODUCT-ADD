import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function ButtonAppend({ width, height, content, onClick }) {
  return (
    <S.Wrapper type="button" width={width} height={height} onClick={onClick}>
      {content}
    </S.Wrapper>
  );
}

ButtonAppend.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonAppend.defaultProps = {
  width: null,
  height: null,
  onClick: null,
};
