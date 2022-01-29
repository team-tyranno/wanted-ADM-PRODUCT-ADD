import React, { useState } from 'react';
import { Input, SearchBox, TagSelect, TagSelected } from 'components';
import { TAGS } from 'constants';
import * as S from './style';

export function FilterTag() {
  const [show, setShow] = useState('none');
  const [tags, setTags] = useState(TAGS.filter((tag) => !tag.isSelected));
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
    const check = tags.map((tag) =>
      tag.key === key ? { ...tag, isSelected: !tag.isSelected } : tag,
    );
    setTags([...check]);

    const set = new Set(check.filter((tag) => tag.isSelected));
    setSelected([...set]);
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
