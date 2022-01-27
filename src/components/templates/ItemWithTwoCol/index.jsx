import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

export function ItemWithTwoCol({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

ItemWithTwoCol.propTypes = {
  children: PropTypes.node.isRequired,
};
