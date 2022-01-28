import React, { useState } from 'react';
import { ThemeBox, ThemeSelected } from 'components';
import { Themes } from 'constants';
import * as S from './style';

export function Theme() {
  const [themes, setThemes] = useState(Themes);
  const [checkedLists, setCheckedList] = useState([]);

  const onCheck = (key) => {
    const edit = themes.map((category) =>
      category.key === key ? { ...category, isChecked: !category.isChecked } : category,
    );
    setThemes(edit);
    setCheckedList(edit.filter((category) => category.isChecked));
  };

  return (
    <S.Container>
      <ThemeBox themes={themes} onCheck={onCheck} />
      <ThemeSelected checkedLists={checkedLists} onCheck={onCheck} />
    </S.Container>
  );
}
