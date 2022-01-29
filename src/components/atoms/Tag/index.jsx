import React from 'react';
import PropTypes from 'prop-types';
import { close } from 'assets';
import * as S from './style';

export function Tag({ tag, onCheck, isSelectedFilter }) {
  return (
    <S.Container onClick={() => onCheck(tag.key)}>
      {tag.name}
      {isSelectedFilter && <img src={close} alt="close" />}
    </S.Container>
  );
}

Tag.defaultProps = {
  isSelectedFilter: false,
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  isSelectedFilter: PropTypes.bool,
};
