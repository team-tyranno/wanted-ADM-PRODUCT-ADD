import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import * as S from './style';

export function SaveBar({ onClick }) {
  return (
    <S.Container>
      <S.Span>상품 등록</S.Span>
      <Button content="저장하기" width="100px" onClick={onClick} />
    </S.Container>
  );
}

SaveBar.propTypes = {
  onClick: PropTypes.func,
};

SaveBar.defaultProps = {
  onClick: null,
};
