export const INITIAL_STATES = {
  // 1~2. 노출 및 판매기간 설정
  exposeSelectedValue: '제한 없음',
  sellSelectedValue: '제한 없음',
  exposeStartDate: '',
  exposeEndDate: '',
  sellStartDate: '',
  sellEndDate: '',

  // 16~18. 상품 배송 설정
  isUserDeliveryChecked: false,
  isPickUpChecked: false,
  isReserveDeliveryChecked: false,
  orderDeliveryStartDate: '',
  orderDeliveryEndDate: '',
  dawnDeliveryDate: '',
  normalDeliveryDate: '',

  // 19. 상품 혜택 허용 설정
  isMileageChecked: false,

  // 20. 기타 설정
  isThankYouCardChecked: false,
};
