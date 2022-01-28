import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FileList, InputImage } from 'components';
import * as S from './style';

export function ImageAdder({ isMulti }) {
  const [files, setFiles] = useState([]);

  const onChange = (e) => {
    const { name } = e.target.files[0];

    if (isMulti) setFiles([{ key: nanoid(), name }, ...files]);
    else setFiles([{ key: nanoid(), name }]);
  };

  const onDelete = (key) => {
    setFiles(files.filter((file) => file.key !== key));
  };

  return (
    <S.Container>
      <InputImage onChange={onChange} />
      <FileList files={files} onDelete={onDelete} />
    </S.Container>
  );
}

ImageAdder.propTypes = {
  isMulti: PropTypes.bool.isRequired,
};
