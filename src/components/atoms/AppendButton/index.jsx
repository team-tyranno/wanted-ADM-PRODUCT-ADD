import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style';

export function AppendButton({ width, height, content }) {
  return (
    <ButtonWrapper type="button" width={width} height={height}>
      {content}
    </ButtonWrapper>
  );
}

AppendButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  content: PropTypes.string.isRequired,
};

AppendButton.defaultProps = {
  width: null,
  height: null,
};
