import React from 'react';
import PropTypes from 'prop-types';
import { AddedFile } from 'components';
import * as S from './style';

export function FileList({ name, onDelete }) {
  return (
    <S.Container>
      <AddedFile title={name} onDelete={onDelete} />
    </S.Container>
  );
}

FileList.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
