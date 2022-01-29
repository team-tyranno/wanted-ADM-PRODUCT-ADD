import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Button({ width, height, content, onClick }) {
  return (
    <S.Btn width={width} height={height} onClick={onClick}>
      {content}
    </S.Btn>
  );
}

Button.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  height: null,
  onClick: null,
};
