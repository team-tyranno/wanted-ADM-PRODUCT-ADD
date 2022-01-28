import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriod({ description, nameList, onChangeList, selectedDates }) {
  return (
    <S.Container>
      {nameList.map((name, index) => (
        <>
          {index === 0 && description !== '' && <S.Description>{description}</S.Description>}
          {index !== 0 && <S.Tilde>~</S.Tilde>}
          <InputDate name={name} date={selectedDates[index]} onChange={onChangeList[index]} />
        </>
      ))}
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  description: PropTypes.string.isRequired,
  nameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeList: PropTypes.arrayOf(PropTypes.func).isRequired,
  selectedDates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/*

<InputDatePeriod
  names={['startDate', 'endDate']}
  onChangeFunctions={[() => console.log('input1'), () => console.log('input2')]}
/>

*/
