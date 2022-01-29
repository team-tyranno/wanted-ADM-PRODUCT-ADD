import React from 'react';
import PropTypes from 'prop-types';
import { ButtonRadioGroup, InputDatePeriod } from 'components';
import { validateStartBeforeEnd } from 'utils';

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
        disabled={formStates[info.salesInfo.salesState] !== info.salesInfo.valueList.slice(-1)[0]}
        onChangeList={info.datesInfo.dateStates.map((state, index) => {
          return (e) => {
            const StartBeforeEnd = validateStartBeforeEnd({
              startDate: index === 0 ? e.target.value : formStates[info.datesInfo.dateStates[0]],
              endDate: index !== 0 ? e.target.value : formStates[info.datesInfo.dateStates[index]],
            });

            const statesChanged = {};
            if (!StartBeforeEnd) {
              info.datesInfo.dateStates.forEach((el) => {
                if (el !== formStates[state]) statesChanged[el] = '';
              });
            }
            statesChanged[state] = e.target.value;
            handleChange(statesChanged);
          };
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
