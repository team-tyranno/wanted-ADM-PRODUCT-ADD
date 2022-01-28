import React, { useState, useRef } from 'react';
import { FileList, InputImage } from 'components';
import * as S from './style';

export function ImageAdder() {
  const id = useRef(0);
  const [files, setFiles] = useState([]);

  const onChange = (e) => {
    const { current } = id;
    const { name } = e.target.files[0];
    setFiles([{ current, name }, ...files]);
    id.current += 1;
  };

  const onDelete = (key) => {
    setFiles(files.filter((file) => file.current !== key));
  };

  return (
    <S.Container>
      <InputImage onChange={onChange} />
      <S.TextInner>
        {files.map((file) => (
          <FileList key={file.current} name={file.name} onDelete={() => onDelete(file.current)} />
        ))}
      </S.TextInner>
    </S.Container>
  );
}
