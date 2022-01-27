import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

export function Category({ title, children }) {
  return (
    <Wrapper>
      <div className="category--title">{title}</div>
      {children}
    </Wrapper>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
