import React from 'react';
import { PropTypes } from 'prop-types';
import { UploaderWrapper } from './style';

export function ImageUploader({ text }) {
  return (
    <UploaderWrapper>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="product-image">{text}</label>
      <input id="product-image" type="file" accept="image/*" />
    </UploaderWrapper>
  );
}

ImageUploader.propTypes = {
  text: PropTypes.string.isRequired,
};
