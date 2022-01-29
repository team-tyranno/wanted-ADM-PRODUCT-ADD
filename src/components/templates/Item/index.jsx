import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Item({ title, children }) {
  return (
    <S.Wrapper>
      <div className="item-title">{title}</div>
      <div className="item-content">{children}</div>
    </S.Wrapper>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
