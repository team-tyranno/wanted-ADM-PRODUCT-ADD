import React from 'react';
import { PropTypes } from 'prop-types';

import * as S from './style';

export function InputDate({ name, date, onChange, disabled }) {
  return (
    <S.Input
      type="datetime-local"
      name={name}
      value={date}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
