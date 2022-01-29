import React from 'react';
import { PropTypes } from 'prop-types';
import { ButtonRadio } from 'components';
import { nanoid } from 'nanoid';

import * as S from './style';

export function ButtonRadioGroup({ name, valueList, selectedValue, onChange }) {
  return (
    <S.Container>
      {valueList.map((value) => (
        <ButtonRadio
          key={nanoid()}
          name={name}
          value={value}
          isChecked={selectedValue === value}
          onChange={onChange}
        />
      ))}
    </S.Container>
  );
}

ButtonRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  valueList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

/*
const [selectedValue, setSelectedValue] = useState('제한 없음');

<ButtonRadioGroup
  name="meat"
  valueList={['제한 없음', '미노출', '노출 기간 설정']}
  selectedValue={selectedValue}
  onChange={(e) => {
  setSelectedValue(e.target.value);
  }}
/>
*/
