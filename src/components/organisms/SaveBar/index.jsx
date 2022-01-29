import React from 'react';
import { Button } from 'components';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function SaveBar({ onClick }) {
  return (
    <S.Container>
      <S.Span>상품 등록</S.Span>
      <Button text="저장하기" width="100px" onClick={onClick} />
    </S.Container>
  );
}

SaveBar.propTypes = {
  onClick: PropTypes.func,
};

SaveBar.defaultProps = {
  onClick: null,
};
