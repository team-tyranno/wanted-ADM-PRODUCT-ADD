import React from 'react';
import { PropTypes } from 'prop-types';

import * as S from './style';

export function InputDate({ onChange }) {
  return (
    <S.Container>
      <S.Input type="date" name="startDate" onChange={onChange} />
      <S.Input type="date" name="endDate" onChange={onChange} />
    </S.Container>
  );
}

InputDate.propTypes = {
  onChange: PropTypes.func.isRequired,
};
