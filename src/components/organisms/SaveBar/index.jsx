import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import * as S from './style';

export function SaveBar({ onClick }) {
  return (
    <>
      <S.Blocker />
      <S.Container>
        <span>상품 등록</span>
        <Button width="84px" content="저장하기" onClick={onClick} />
      </S.Container>
    </>
  );
}

SaveBar.propTypes = {
  onClick: PropTypes.func,
};

SaveBar.defaultProps = {
  onClick: null,
};
