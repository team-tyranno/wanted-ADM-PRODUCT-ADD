import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function ButtonSwitch({ id, isChecked, onChange }) {
  return (
    <S.Container>
      <S.Input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <S.Label htmlFor={id} isChecked={isChecked}>
        <S.Ball isChecked={isChecked} />
      </S.Label>
    </S.Container>
  );
}

ButtonSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
