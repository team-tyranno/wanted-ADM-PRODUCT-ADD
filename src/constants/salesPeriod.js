export const SET_EXPIRATION = {
  salesInfo: {
    name: 'expiration',
    valueList: ['제한 없음', '미노출', '노출 기간 설정'],
    salesState: 'exposeSelectedValue',
  },
  datesInfo: {
    description: '',
    nameList: ['expirationStartDate', 'expirationEndDate'],
    dateStates: ['exposeStartDate', 'exposeEndDate'],
  },
};

export const SET_SALES = {
  salesInfo: {
    name: 'sales',
    valueList: ['제한 없음', '미판매', '판매 기간 설정'],
    salesState: 'sellSelectedValue',
  },
  datesInfo: {
    description: '',
    nameList: ['salesStartDate', 'salesEndDate'],
    dateStates: ['sellStartDate', 'sellEndDate'],
  },
};
