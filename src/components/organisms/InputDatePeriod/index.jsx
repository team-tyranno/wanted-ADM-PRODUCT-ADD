import React from 'react';
import { PropTypes } from 'prop-types';
import { InputDate } from 'components';

import * as S from './style';

export function InputDatePeriod({ names, onChangeFunctions }) {
  return (
    <S.Container>
      <InputDate name={names[0]} onChange={onChangeFunctions[0]} />
      <InputDate name={names[1]} onChange={onChangeFunctions[1]} />
    </S.Container>
  );
}

InputDatePeriod.propTypes = {
  names: PropTypes.node.isRequired,
  onChangeFunctions: PropTypes.node.isRequired,
};

/*

<InputDatePeriod
  names={['startDate', 'endDate']}
  onChangeFunctions={[() => console.log('input1'), () => console.log('input2')]}
/>

*/
