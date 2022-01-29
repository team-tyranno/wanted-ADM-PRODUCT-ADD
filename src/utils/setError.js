export const setError = (s) => {
  if (
    s.exposeSelectedValue === '노출 기간 설정' &&
    (s.exposeStartDate === '' || s.exposeEndDate === '')
  ) {
    return '노출 기간을 설정해 주세요';
  }
  if (
    s.sellSelectedValue === '판매 기간 설정' &&
    (s.sellStartDate === '' || s.sellEndDate === '')
  ) {
    return '판매 기간을 설정해 주세요';
  }
  if (
    s.isReserveDeliveryChecked &&
    (s.orderDeliveryStartDate === '' ||
      s.orderDeliveryEndDate === '' ||
      s.dawnDeliveryDate === '' ||
      s.normalDeliveryDate === '')
  ) {
    return '선 주문 예약 배송 시간을 전부 입력해 주세요';
  }
  if (s.checkedLists.length === 0) return '하나 이상의 카테고리를 설정해 주세요';
  if (s.value === '') return '상품명을 입력해 주세요';
  if (s.goodsDescription === '') return '상품 구성 소개 정보를 입력해 주세요';

  return '안전하게 저장되었습니다';
};
