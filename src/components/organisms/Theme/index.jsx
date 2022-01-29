import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeBox, ThemeSelected } from 'components';
import * as S from './style';

export function Theme({ formStates, handleChange }) {
  const onCheck = (key) => {
    const edit = formStates.themes.map((category) =>
      category.key === key ? { ...category, isChecked: !category.isChecked } : category,
    );
    const checked = edit.filter((category) => category.isChecked);
    handleChange({ themes: edit, checkedLists: checked });
  };

  return (
    <S.Container>
      <ThemeBox themes={formStates.themes} onCheck={onCheck} />
      <ThemeSelected checkedLists={formStates.checkedLists} onCheck={onCheck} />
    </S.Container>
  );
}

Theme.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
