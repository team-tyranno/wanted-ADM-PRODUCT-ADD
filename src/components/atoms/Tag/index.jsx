import React from 'react';
import PropTypes from 'prop-types';
import { close } from 'assets';
import * as S from './style';

export function Tag({ tag, isSelectedFilter, onCheck }) {
  return (
    <S.Container onClick={() => onCheck(tag.key)}>
      {tag.name}
      {isSelectedFilter && <img src={close} alt="close" />}
    </S.Container>
  );
}

Tag.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tag: PropTypes.object.isRequired,
  isSelectedFilter: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
};

Tag.defaultProps = {
  isSelectedFilter: false,
};
