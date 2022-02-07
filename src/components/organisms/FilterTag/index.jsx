import React, { useState } from 'react';
import { Input, SearchBox, TagSelect, TagSelected } from 'components';
import { TAGS } from 'constants';
import * as S from './style';

export function FilterTag() {
  const [show, setShow] = useState('none');
  const [tags, setTags] = useState(TAGS);
  const [selected, setSelected] = useState([]);

  const onChange = (e) => {
    setTags(TAGS.filter((tag) => tag.name.toLowerCase().includes(e.target.value)));
  };

  const onFocus = () => {
    setShow('block');
  };

  const onBlur = (e) => {
    e.target.value = '';
  };

  const onCheck = (key) => {
    const selectedTag = tags.filter((tag) => tag.key === key);
    const isInclude = selected.findIndex((tag) => tag.name === selectedTag[0].name);
    const updateSelected = selected;

    if (isInclude > -1) {
      updateSelected.splice(isInclude, 1);
    } else {
      updateSelected.push(selectedTag[0]);
    }

    setSelected([...updateSelected]);
    setTags(TAGS);
    setShow('none');
  };

  return (
    <>
      <S.Container>
        <Input
          placeHolder="검색어를 입력하세요."
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <SearchBox show={show}>
          <TagSelect tags={tags} onCheck={onCheck} />
        </SearchBox>
      </S.Container>
      {selected.length ? <TagSelected tags={selected} onCheck={onCheck} /> : null}
    </>
  );
}
