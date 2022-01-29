import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Category({ title, children }) {
  return (
    <S.Wrapper>
      <div className="category-title">{title}</div>
      {children}
    </S.Wrapper>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
