import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriodTest({ info, formStates, onChangeList }) {
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
            date={formStates[info.dateStates[index]]}
            onChange={onChangeList[index]}
          />
        </>
      ))}
    </S.Container>
  );
}

InputDatePeriodTest.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  onChangeList: PropTypes.arrayOf(PropTypes.func).isRequired,
};
