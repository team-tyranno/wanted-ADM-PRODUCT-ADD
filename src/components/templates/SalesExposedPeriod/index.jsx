import React, { useState } from 'react';
import { Category, Item, ButtonRadioGroup, InputDatePeriod } from 'components';

export function SalesExposedPeriod() {
  const [exposeSelectedValue, setExposeSelectedValue] = useState('제한 없음');
  const [sellSelectedValue, setSellSelectedValue] = useState('제한 없음');
  return (
    <Category title="노출 및 판매기간 설정">
      <Item title="상품 노출 기한">
        <ButtonRadioGroup
          name="exposePeriod"
          valueList={['제한 없음', '미노출', '노출 기간 설정']}
          onChange={(e) => {
            setExposeSelectedValue(e.target.value);
          }}
          selectedValue={exposeSelectedValue}
        />
        <InputDatePeriod
          nameAndCallback={[
            { name: 'exposeStartDate', onChange: () => console.log('input1') },
            { name: 'exposeEndDate', onChange: () => console.log('input2') },
          ]}
        />
      </Item>
      <Item title="상품 판매 기한">
        <ButtonRadioGroup
          name="sellPeriod"
          valueList={['제한 없음', '미판매', '판매 기간 설정']}
          onChange={(e) => {
            setSellSelectedValue(e.target.value);
          }}
          selectedValue={sellSelectedValue}
        />
        <InputDatePeriod
          nameAndCallback={[
            { name: 'sellStartDate', onChange: () => console.log('input3') },
            { name: 'sellEndDate', onChange: () => console.log('input4') },
          ]}
        />
      </Item>
    </Category>
  );
}
