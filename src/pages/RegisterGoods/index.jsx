import React, { useState } from 'react';
import { Category, Item, SalesPeriod, ButtonSwitch, InputDatePeriod } from 'components';
import { validateStartBeforeEnd } from 'utils';
import { SET_EXPIRATION, SET_SALES, SET_DELIVERY, INITIAL_STATES } from 'constants';

export function RegisterGoods() {
  const [formStates, setFormStates] = useState(INITIAL_STATES);
  const handleChange = (newStates) => {
    setFormStates({ ...formStates, ...newStates });
  };

  return (
    <>
      <Category title="노출 및 판매기간 설정">
        <Item title="상품 노출 기한">
          <SalesPeriod
            salesInfo={SET_EXPIRATION.salesInfo}
            datesInfo={SET_EXPIRATION.datesInfo}
            selectedValue={formStates.exposeSelectedValue}
            selectedDates={[formStates.exposeStartDate, formStates.exposeEndDate]}
            salesOnChange={(e) => handleChange({ exposeSelectedValue: e.target.value })}
            datesOnChangeList={[
              (e) => handleChange({ exposeStartDate: e.target.value }),
              (e) => handleChange({ exposeEndDate: e.target.value }),
            ]}
          />
        </Item>
        <Item title="상품 판매 기한">
          <SalesPeriod
            salesInfo={SET_SALES.salesInfo}
            datesInfo={SET_SALES.datesInfo}
            selectedValue={formStates.sellSelectedValue}
            selectedDates={[formStates.sellStartDate, formStates.sellEndDate]}
            salesOnChange={(e) => handleChange({ sellSelectedValue: e.target.value })}
            datesOnChangeList={[
              (e) => handleChange({ sellStartDate: e.target.value }),
              (e) => handleChange({ sellEndDate: e.target.value }),
            ]}
          />
        </Item>
      </Category>
      <Category title="상품 배송 설정">
        <Item title="사용자 배송일 출발일 지정">
          <ButtonSwitch
            id="userdelivery"
            isChecked={formStates.isUserDeliveryChecked}
            onChange={() => {
              handleChange({
                isUserDeliveryChecked: !formStates.isUserDeliveryChecked,
                isReserveDeliveryChecked: !formStates.isUserDeliveryChecked
                  ? false
                  : formStates.isReserveDeliveryChecked,
              });
            }}
          />
        </Item>
        <Item title="방문 수령">
          <ButtonSwitch
            id="pickup"
            isChecked={formStates.isPickUpChecked}
            onChange={() => {
              handleChange({
                isPickUpChecked: !formStates.isPickUpChecked,
                isReserveDeliveryChecked: !formStates.isPickUpChecked
                  ? false
                  : formStates.isReserveDeliveryChecked,
              });
            }}
          />
        </Item>
        <Item title="선 주문 예약 배송">
          <ButtonSwitch
            id="reservedelivery"
            isChecked={formStates.isReserveDeliveryChecked}
            onChange={() => {
              handleChange({
                isReserveDeliveryChecked: !formStates.isReserveDeliveryChecked,
                isUserDeliveryChecked: !formStates.isReserveDeliveryChecked
                  ? false
                  : formStates.isUserDeliveryChecked,
                isPickUpChecked: !formStates.isReserveDeliveryChecked
                  ? false
                  : formStates.isPickupChecked,
              });
            }}
          />
          <InputDatePeriod
            description={SET_DELIVERY.DELIVERY_TIME.description}
            nameList={SET_DELIVERY.DELIVERY_TIME.nameList}
            onChangeList={[
              (e) => {
                const StartBeforeEnd = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: formStates.orderDeliveryEndDate,
                });
                handleChange({
                  orderDeliveryStartDate: e.target.value,
                  orderDeliveryEndDate: !StartBeforeEnd ? '' : formStates.orderDeliveryEndDate,
                });
              },
              (e) => {
                const StartBeforeEnd = validateStartBeforeEnd({
                  startDate: formStates.orderDeliveryStartDate,
                  endDate: e.target.value,
                });
                const noDawnDateCollide = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: formStates.dawnDeliveryDate,
                });
                const noNormalDateCollide = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: formStates.normalDeliveryDate,
                });
                handleChange({
                  orderDeliveryStartDate: !StartBeforeEnd ? '' : formStates.orderDeliveryStartDate,
                  dawnDeliveryDate: !noDawnDateCollide ? '' : formStates.dawnDeliveryDate,
                  normalDeliveryDate: !noNormalDateCollide ? '' : formStates.normalDeliveryDate,
                  orderDeliveryEndDate: e.target.value,
                });
              },
            ]}
            selectedDates={[formStates.orderDeliveryStartDate, formStates.orderDeliveryEndDate]}
          />
          <InputDatePeriod
            description={SET_DELIVERY.DAWN_DELIVERY.description}
            nameList={SET_DELIVERY.DAWN_DELIVERY.nameList}
            onChangeList={[
              (e) => {
                const noDawnDateCollide = validateStartBeforeEnd({
                  startDate: formStates.orderDeliveryEndDate,
                  endDate: e.target.value,
                });
                if (!noDawnDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  handleChange({ dawnDeliveryDate: '' });
                } else {
                  handleChange({ dawnDeliveryDate: e.target.value });
                }
              },
            ]}
            selectedDates={[formStates.dawnDeliveryDate]}
          />
          <InputDatePeriod
            description={SET_DELIVERY.NORMAL_DELIVERY.description}
            nameList={SET_DELIVERY.NORMAL_DELIVERY.nameList}
            onChangeList={[
              (e) => {
                const noNormalDateCollide = validateStartBeforeEnd({
                  startDate: formStates.orderDeliveryEndDate,
                  endDate: e.target.value,
                });
                if (!noNormalDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  handleChange({ normalDeliveryDate: '' });
                } else {
                  handleChange({ normalDeliveryDate: e.target.value });
                }
              },
            ]}
            selectedDates={[formStates.normalDeliveryDate]}
          />
        </Item>
      </Category>
      <Category title="상품 혜택 허용 설정">
        <Item title="마일리지 적립">
          <ButtonSwitch
            id="mileage"
            isChecked={formStates.isMileageChecked}
            onChange={() => {
              handleChange({ isMileageChecked: !formStates.isMileageChecked });
            }}
          />
        </Item>
      </Category>
      <Category title="기타 설정">
        <Item title="감사카드 제공">
          <ButtonSwitch
            id="thankyoucard"
            isChecked={formStates.isThankYouCardChecked}
            onChange={() => {
              handleChange({ isThankYouCardChecked: !formStates.isThankYouCardChecked });
            }}
          />
        </Item>
      </Category>
    </>
  );
}
