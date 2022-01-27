import React from 'react';
import { PropTypes } from 'prop-types';

import * as S from './style';

export function ButtonRadio({ isChecked, value, name, onChange }) {
  return (
    <S.Container>
      <S.RadioButton
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <S.RadioLabel htmlFor={value}>{value}</S.RadioLabel>
    </S.Container>
  );
}

ButtonRadio.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
