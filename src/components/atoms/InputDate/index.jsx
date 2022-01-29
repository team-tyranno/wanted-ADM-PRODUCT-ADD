import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function InputDate({ name, date, disabled, onChange }) {
  return (
    <S.Input
      type="datetime-local"
      name={name}
      value={date}
      disabled={disabled}
      onChange={onChange}
    />
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
