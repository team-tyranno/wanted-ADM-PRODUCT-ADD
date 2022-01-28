import React, { useState } from 'react';
import { Category, Item, SalesPeriod, ButtonSwitch, InputDatePeriod } from 'components';
import { validateStartBeforeEnd } from 'utils';
import { SET_EXPIRATION, SET_SALES, SET_DELIVERY } from 'constants';

export function RegisterGoods() {
  // 노출 및 판매기간 설정
  const [exposeSelectedValue, setExposeSelectedValue] = useState('제한 없음');
  const [sellSelectedValue, setSellSelectedValue] = useState('제한 없음');
  const [exposeStartDate, setExposeStartDate] = useState('');
  const [exposeEndDate, setExposeEndDate] = useState('');
  const [sellStartDate, setSellStartDate] = useState('');
  const [sellEndDate, setSellEndDate] = useState('');

  // 상품 배송 설정
  const [isUserDeliveryChecked, setIsUserDeliveryChecked] = useState(false);
  const [isPickUpChecked, setIsPickUpChecked] = useState(false);
  const [isReserveDeliveryChecked, setIsReserveDeliveryChecked] = useState(false);
  const [orderDeliveryStartDate, setOrderDeliveryStartDate] = useState('');
  const [orderDeliveryEndDate, setOrderDeliveryEndDate] = useState('');
  const [dawnDeliveryDate, setDawnDeliveryDate] = useState('');
  const [normalDeliveryDate, setNormalDeliveryDate] = useState('');

  // 상품 혜택 허용 설정
  const [isMileageChecked, setIsMileageChecked] = useState(true);

  // 기타 설정
  const [isThankYouCardChecked, setIsThankYouCardChecked] = useState(false);

  return (
    <>
      <Category title="노출 및 판매기간 설정">
        <Item title="상품 노출 기한">
          <SalesPeriod
            salesInfo={SET_EXPIRATION.salesInfo}
            datesInfo={SET_EXPIRATION.datesInfo}
            selectedValue={exposeSelectedValue}
            selectedDates={[exposeStartDate, exposeEndDate]}
            salesOnChange={setExposeSelectedValue}
            datesOnChangeList={[
              (e) => setExposeStartDate(e.target.value),
              (e) => setExposeEndDate(e.target.value),
            ]}
          />
        </Item>
        <Item title="상품 판매 기한">
          <SalesPeriod
            salesInfo={SET_SALES.salesInfo}
            datesInfo={SET_SALES.datesInfo}
            selectedValue={sellSelectedValue}
            selectedDates={[sellStartDate, sellEndDate]}
            salesOnChange={setSellSelectedValue}
            datesOnChangeList={[
              (e) => setSellStartDate(e.target.value),
              (e) => setSellEndDate(e.target.value),
            ]}
          />
        </Item>
      </Category>
      <Category title="상품 배송 설정">
        <Item title="사용자 배송일 출발일 지정">
          <ButtonSwitch
            id="userdelivery"
            isChecked={isUserDeliveryChecked}
            onChange={() => {
              setIsUserDeliveryChecked(!isUserDeliveryChecked);
              if (!isUserDeliveryChecked) setIsReserveDeliveryChecked(false);
            }}
          />
        </Item>
        <Item title="방문 수령">
          <ButtonSwitch
            id="pickup"
            isChecked={isPickUpChecked}
            onChange={() => {
              setIsPickUpChecked(!isPickUpChecked);
              if (!isPickUpChecked) setIsReserveDeliveryChecked(false);
            }}
          />
        </Item>
        <Item title="선 주문 예약 배송">
          <ButtonSwitch
            id="reservedelivery"
            isChecked={isReserveDeliveryChecked}
            onChange={() => {
              setIsReserveDeliveryChecked(!isReserveDeliveryChecked);
              if (!isReserveDeliveryChecked) {
                setIsUserDeliveryChecked(false);
                setIsPickUpChecked(false);
              }
            }}
          />
          <InputDatePeriod
            description={SET_DELIVERY.DELIVERY_TIME.description}
            nameList={SET_DELIVERY.DELIVERY_TIME.nameList}
            onChangeList={[
              (e) => {
                const StartBeforeEnd = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: orderDeliveryEndDate,
                });
                if (!StartBeforeEnd) {
                  setOrderDeliveryEndDate('');
                }
                setOrderDeliveryStartDate(e.target.value);
              },
              (e) => {
                const StartBeforeEnd = validateStartBeforeEnd({
                  startDate: orderDeliveryStartDate,
                  endDate: e.target.value,
                });
                const noDawnDateCollide = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: dawnDeliveryDate,
                });
                const noNormalDateCollide = validateStartBeforeEnd({
                  startDate: e.target.value,
                  endDate: normalDeliveryDate,
                });
                if (!StartBeforeEnd) {
                  setOrderDeliveryStartDate('');
                }
                if (!noDawnDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  setDawnDeliveryDate('');
                }
                if (!noNormalDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  setNormalDeliveryDate('');
                }
                setOrderDeliveryEndDate(e.target.value);
              },
            ]}
            selectedDates={[orderDeliveryStartDate, orderDeliveryEndDate]}
          />
          <InputDatePeriod
            description={SET_DELIVERY.DAWN_DELIVERY.description}
            nameList={SET_DELIVERY.DAWN_DELIVERY.nameList}
            onChangeList={[
              (e) => {
                const noDawnDateCollide = validateStartBeforeEnd({
                  startDate: orderDeliveryEndDate,
                  endDate: e.target.value,
                });
                if (!noDawnDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  setDawnDeliveryDate('');
                } else {
                  setDawnDeliveryDate(e.target.value);
                }
              },
            ]}
            selectedDates={[dawnDeliveryDate]}
          />
          <InputDatePeriod
            description={SET_DELIVERY.NORMAL_DELIVERY.description}
            nameList={SET_DELIVERY.NORMAL_DELIVERY.nameList}
            onChangeList={[
              (e) => {
                const noNormalDateCollide = validateStartBeforeEnd({
                  startDate: orderDeliveryEndDate,
                  endDate: e.target.value,
                });
                if (!noNormalDateCollide) {
                  alert('주문 시간 이후로 출고일을 지정해 주세요');
                  setNormalDeliveryDate('');
                } else {
                  setNormalDeliveryDate(e.target.value);
                }
              },
            ]}
            selectedDates={[normalDeliveryDate]}
          />
        </Item>
      </Category>
      <Category title="상품 혜택 허용 설정">
        <Item title="마일리지 적립">
          <ButtonSwitch
            id="mileage"
            isChecked={isMileageChecked}
            onChange={() => {
              setIsMileageChecked(!isMileageChecked);
            }}
          />
        </Item>
      </Category>
      <Category title="기타 설정">
        <Item title="감사카드 제공">
          <ButtonSwitch
            id="thankyoucard"
            isChecked={isThankYouCardChecked}
            onChange={() => {
              setIsThankYouCardChecked(!isThankYouCardChecked);
            }}
          />
        </Item>
      </Category>
    </>
  );
}
