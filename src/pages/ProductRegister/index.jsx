import React, { useState } from 'react';
import {
  Category,
  Item,
  SalesPeriod,
  ButtonSwitch,
  InputDatePeriod,
  ImageAppender,
  ProductInfo,
  Modal,
  Theme,
  GoodsName,
  GoodsInformation,
  GoodsStock,
  ItemWithTwoCol,
} from 'components';
import { validateStartBeforeEnd } from 'utils';
import { SET_EXPIRATION, SET_SALES, SET_DELIVERY, INITIAL_STATES } from 'constants';

export function ProductRegister() {
  const [formStates, setFormStates] = useState(INITIAL_STATES);
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (newStates) => {
    setFormStates({ ...formStates, ...newStates });
  };

  return (
    <>
      {/* 1~2 */}
      {openModal && <Modal text="입력해주세요" onClick={() => setOpenModal(false)} />}
      <Category title="노출 및 판매기간 설정">
        <Item title="상품 노출 기한">
          <SalesPeriod info={SET_EXPIRATION} formStates={formStates} handleChange={handleChange} />
        </Item>
        <Item title="상품 판매 기한">
          <SalesPeriod info={SET_SALES} formStates={formStates} handleChange={handleChange} />
        </Item>
      </Category>

      {/* 3~9 */}
      <Category title="상품 기본 정보">
        <Item title="카테고리">
          <Theme />
        </Item>
        <ItemWithTwoCol>
          <GoodsName />
        </ItemWithTwoCol>
        <Item title="상품 구성 소개 정보">
          <GoodsInformation />
        </Item>
        <Item title="상품 대표 이미지">
          <ImageAppender isMulti />
        </Item>
        <Item title="상품총 재고">
          <GoodsStock />
        </Item>
      </Category>

      {/* 13~15 */}
      <Category title="상품 소개 이미지">
        <ImageAppender isMulti={false} />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAppender isMulti={false} />
      </Category>
      <Category title="상품 정보 고시">
        <ProductInfo />
      </Category>
      {/* 16~20 */}
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
            info={SET_DELIVERY.DELIVERY_TIME}
            formStates={formStates}
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
          />
          <InputDatePeriod
            info={SET_DELIVERY.DAWN_DELIVERY}
            formStates={formStates}
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
          />
          <InputDatePeriod
            info={SET_DELIVERY.NORMAL_DELIVERY}
            formStates={formStates}
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
