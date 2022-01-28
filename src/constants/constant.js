export const SET_EXPIRATION = {
  salesInfo: {
    name: 'expiration',
    valueList: ['제한 없음', '미노출', '노출 기간 설정'],
  },
  datesInfo: {
    description: '',
    nameList: ['expirationStartDate', 'expirationEndDate'],
  },
};

export const SET_SALES = {
  salesInfo: {
    name: 'sales',
    valueList: ['제한 없음', '미판매', '판매 기간 설정'],
  },
  datesInfo: {
    description: '',
    nameList: ['salesStartDate', 'salesEndDate'],
  },
};

export const SET_DELIVERY = {
  DELIVERY_TIME: {
    description: '주문 시간',
    nameList: ['deliveryStartDate', 'deliveryEndDate'],
  },
  DAWN_DELIVERY: {
    description: '새벽 배송',
    nameList: ['dawnDeliveryDate'],
  },
  NORMAL_DELIVERY: {
    description: '일반 배송',
    nameList: ['normalDeliveryDate'],
  },
};
