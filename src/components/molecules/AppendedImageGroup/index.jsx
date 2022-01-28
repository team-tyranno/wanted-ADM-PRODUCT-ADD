import React from 'react';
import PropTypes from 'prop-types';
import { AppendedImage } from 'components';
import * as S from './style';

export function AppendedImageGroup({ files, onDelete }) {
  return (
    <S.Container>
      {files.map((file) => (
        <AppendedImage key={file.key} title={file.name} onDelete={() => onDelete(file.key)} />
      ))}
    </S.Container>
  );
}

AppendedImageGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  files: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
