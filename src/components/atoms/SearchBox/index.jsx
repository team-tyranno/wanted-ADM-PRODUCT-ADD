import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function SearchBox({ show, children }) {
  return <S.Container show={show}>{children}</S.Container>;
}

SearchBox.propTypes = {
  show: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
