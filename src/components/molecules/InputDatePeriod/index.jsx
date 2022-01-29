import React from 'react';
import PropTypes from 'prop-types';
import { InputDate } from 'components';
import { nanoid } from 'nanoid';
import * as S from './style';

export function InputDatePeriod({ info, formStates, disabled, onChangeList }) {
  return (
    <S.Container>
      {info.nameList.map((name, index) => (
        <div key={nanoid()}>
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
        </div>
      ))}
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChangeList: PropTypes.arrayOf(PropTypes.func).isRequired,
};
