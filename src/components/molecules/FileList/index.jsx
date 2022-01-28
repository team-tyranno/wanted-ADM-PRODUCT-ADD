import React from 'react';
import PropTypes from 'prop-types';
import { AddedFile } from 'components';

export function FileList({ name, onDelete }) {
  return <AddedFile title={name} onDelete={onDelete} />;
}

FileList.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
