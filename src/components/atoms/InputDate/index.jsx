import React from 'react';
import { PropTypes } from 'prop-types';

import * as S from './style';

export function InputDate({ name, onChange }) {
  return <S.Input type="date" name={name} onChange={onChange} />;
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
