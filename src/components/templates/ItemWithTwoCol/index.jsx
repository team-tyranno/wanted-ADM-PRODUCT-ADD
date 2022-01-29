import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function ItemWithTwoCol({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

ItemWithTwoCol.propTypes = {
  children: PropTypes.node.isRequired,
};
