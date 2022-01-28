import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonRadioGroup, InputDatePeriod } from 'components';

export function SalesPeriod({
  salesInfo,
  datesInfo,
  selectedValue,
  selectedDates,
  salesOnChange,
  datesOnChangeList,
}) {
  return (
    <>
      <ButtonRadioGroup
        name={salesInfo.name}
        valueList={salesInfo.valueList}
        onChange={(e) => salesOnChange(e.target.value)}
        selectedValue={selectedValue}
      />
      <InputDatePeriod
        description={datesInfo.description}
        nameList={datesInfo.nameList}
        selectedDates={selectedDates}
        onChangeList={datesOnChangeList}
      />
    </>
  );
}

SalesPeriod.propTypes = {
  salesInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    valueList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  datesInfo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    nameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedValue: PropTypes.string.isRequired,
  selectedDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  salesOnChange: PropTypes.func.isRequired,
  datesOnChangeList: PropTypes.arrayOf(PropTypes.func).isRequired,
};
