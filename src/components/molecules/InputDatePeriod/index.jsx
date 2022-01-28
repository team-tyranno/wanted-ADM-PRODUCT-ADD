import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriod({ nameAndCallback }) {
  return (
    <S.Container>
      {nameAndCallback.map((el) => (
        <InputDate name={el.name} onChange={el.onChange} />
      ))}
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  nameAndCallback: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/*

<InputDatePeriod
  names={['startDate', 'endDate']}
  onChangeFunctions={[() => console.log('input1'), () => console.log('input2')]}
/>

*/
