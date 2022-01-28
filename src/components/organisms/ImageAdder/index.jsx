import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FileList, InputImage } from 'components';
import * as S from './style';

export function ImageAdder() {
  const [files, setFiles] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    const { name } = e.target.files[0];
    setFiles([{ key: nanoid(), name }, ...files]);
  };

  const onDelete = (key) => {
    setFiles(files.filter((file) => file.key !== key));
  };

  return (
    <S.Container>
      <InputImage onChange={onChange} />
      <S.TextInner>
        {files.map((file) => (
          <FileList key={file.key} name={file.name} onDelete={() => onDelete(file.key)} />
        ))}
      </S.TextInner>
    </S.Container>
  );
}
