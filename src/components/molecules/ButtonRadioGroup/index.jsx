import React from 'react';
import PropTypes from 'prop-types';
import { ButtonRadio } from 'components';
import * as S from './style';

export function ButtonRadioGroup({ name, valueList, selectedValue, onChange }) {
  return (
    <S.Container>
      {valueList.map((value) => (
        <ButtonRadio
          name={name}
          value={value}
          isChecked={selectedValue === value}
          onChange={onChange}
        />
      ))}
    </S.Container>
  );
}

ButtonRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  valueList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
