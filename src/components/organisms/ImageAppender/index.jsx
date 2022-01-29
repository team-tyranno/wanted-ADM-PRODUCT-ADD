import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputImage, AppendedImageGroup } from 'components';
import * as S from './style';

export function ImageAppender({ isMulti }) {
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
      <AppendedImageGroup files={files} onDelete={onDelete} />
    </S.Container>
  );
}

ImageAppender.propTypes = {
  isMulti: PropTypes.bool.isRequired,
};
