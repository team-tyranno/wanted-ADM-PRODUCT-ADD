import React, { useState } from 'react';
import { Category, Item, SalesExposedPeriod, ButtonSwitch, InputDatePeriod } from 'components';
import { validateStartBeforeEnd } from 'utils';

export function RegisterGoods() {
  const [isUserDeliveryChecked, setIsUserDeliveryChecked] = useState(false);
  const [isPickUpChecked, setIsPickUpChecked] = useState(false);
  const [isReserveDeliveryChecked, setIsReserveDeliveryChecked] = useState(false);
  const [orderDeliveryStartDate, setOrderDeliveryStartDate] = useState('');
  const [orderDeliveryEndDate, setOrderDeliveryEndDate] = useState('');
  const [dawnDeliveryDate, setDawnDeliveryDate] = useState('');
  const [normalDeliveryDate, setNormalDeliveryDate] = useState('');

  const [isMileageChecked, setIsMileageChecked] = useState(true);

  const [isThankYouCardChecked, setIsThankYouCardChecked] = useState(false);

  // 임시값
  // 틀린거 입력시 날짜 초기화 기능
  const orderDeliveryNameAndCallback = [
    {
      name: 'orderStart',
      date: orderDeliveryStartDate,
      onChange: (e) => {
        const startBeforeEnd = validateStartBeforeEnd({
          startDate: e.target.value,
          endDate: orderDeliveryEndDate,
        });
        if (!startBeforeEnd) {
          setOrderDeliveryEndDate('');
        }
        setOrderDeliveryStartDate(e.target.value);
      },
    },
    {
      name: 'onderEnd',
      date: orderDeliveryEndDate,
      onChange: (e) => {
        const startBeforeEnd = validateStartBeforeEnd({
          startDate: orderDeliveryStartDate,
          endDate: e.target.value,
        });
        const noDawnDateCollide = validateStartBeforeEnd({
          startDate: e.target.value,
          endDate: dawnDeliveryDate,
        });
        const noNormalDateCollide = validateStartBeforeEnd({
          startDate: e.target.value,
          endDate: dawnDeliveryDate,
        });

        if (!startBeforeEnd) {
          setOrderDeliveryStartDate('');
        }
        if (!noDawnDateCollide) {
          setDawnDeliveryDate('');
        }
        if (!noNormalDateCollide) {
          setNormalDeliveryDate('');
        }
        setOrderDeliveryEndDate(e.target.value);
      },
    },
  ];

  const dawnDeliveryNameAndCallback = [
    {
      name: 'dawndelivery',
      date: dawnDeliveryDate,
      onChange: (e) => {
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
    },
  ];
  const normalDeliveryNameAndCallback = [
    {
      name: 'normaldelivery',
      date: normalDeliveryDate,
      onChange: (e) => {
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
    },
  ];

  return (
    <>
      <SalesExposedPeriod />
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
          <InputDatePeriod description="주문 시간" nameAndCallback={orderDeliveryNameAndCallback} />
          <InputDatePeriod description="새벽 배송" nameAndCallback={dawnDeliveryNameAndCallback} />
          <InputDatePeriod
            description="일반 배송"
            nameAndCallback={normalDeliveryNameAndCallback}
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
