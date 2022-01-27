import React from 'react';
import { ImageInputButton } from 'components/atoms/ImageInput/style';
import { PropTypes } from 'prop-types';

export default function ImageInput({ title }) {
  return <ImageInputButton>{title}</ImageInputButton>;
}

ImageInput.propTypes = {
  title: PropTypes.string.isRequired,
};
