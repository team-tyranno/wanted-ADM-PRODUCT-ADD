import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonRadioGroup, InputDatePeriod } from 'components';

export function SalesPeriod({ info, formStates, handleChange }) {
  return (
    <>
      <ButtonRadioGroup
        name={info.salesInfo.name}
        valueList={info.salesInfo.valueList}
        onChange={(e) => handleChange({ [info.salesInfo.salesState]: e.target.value })}
        selectedValue={formStates[info.salesInfo.salesState]}
      />
      <InputDatePeriod
        info={info.datesInfo}
        formStates={formStates}
        onChangeList={info.datesInfo.dateStates.map((state) => {
          return (e) => handleChange({ [state]: e.target.value });
        })}
      />
    </>
  );
}

SalesPeriod.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
