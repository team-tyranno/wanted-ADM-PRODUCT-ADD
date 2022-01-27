import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

export function Item({ title, children }) {
  return (
    <Wrapper>
      <div className="item--title">{title}</div>
      <div className="item--content">{children}</div>
    </Wrapper>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
