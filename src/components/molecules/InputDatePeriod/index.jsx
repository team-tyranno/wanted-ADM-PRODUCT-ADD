import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriod({ nameAndCallback, description }) {
  return (
    <S.Container>
      {nameAndCallback.map((el, index) => (
        <>
          {index === 0 && description !== '' && (
            <S.Description htmlFor={el.name}>{description}</S.Description>
          )}
          {index !== 0 && <S.Tilde>~</S.Tilde>}
          <InputDate name={el.name} date={el.date} onChange={el.onChange} />
        </>
      ))}
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  description: PropTypes.string.isRequired,
  nameAndCallback: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/*

<InputDatePeriod
  names={['startDate', 'endDate']}
  onChangeFunctions={[() => console.log('input1'), () => console.log('input2')]}
/>

*/
