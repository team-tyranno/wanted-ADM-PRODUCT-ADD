import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriod({ info, formStates, onChangeList, disabled }) {
  return (
    <S.Container>
      {info.nameList.map((name, index) => (
        <>
          {index === 0 && info.description !== '' && (
            <S.Description>{info.description}</S.Description>
          )}
          {index !== 0 && <S.Tilde>~</S.Tilde>}
          <InputDate
            name={name}
            date={disabled ? '' : formStates[info.dateStates[index]]}
            disabled={disabled}
            onChange={onChangeList[index]}
          />
        </>
      ))}
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  onChangeList: PropTypes.arrayOf(PropTypes.func).isRequired,
  disabled: PropTypes.bool.isRequired,
};
