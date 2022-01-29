export const SET_DELIVERY = {
  DELIVERY_TIME: {
    description: '주문 시간',
    nameList: ['deliveryStartDate', 'deliveryEndDate'],
    dateStates: ['orderDeliveryStartDate', 'orderDeliveryEndDate'],
  },
  DAWN_DELIVERY: {
    description: '새벽 배송',
    nameList: ['dawnDeliveryDate'],
    dateStates: ['dawnDeliveryDate'],
  },
  NORMAL_DELIVERY: {
    description: '일반 배송',
    nameList: ['normalDeliveryDate'],
    dateStates: ['normalDeliveryDate'],
  },
};
