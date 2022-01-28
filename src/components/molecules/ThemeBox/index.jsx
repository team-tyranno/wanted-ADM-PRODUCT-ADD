import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'components/atoms/Checkbox';
import * as S from './style';

export function ThemeBox({ themes, onCheck }) {
  return (
    <S.Container>
      {themes.map((theme) => (
        <Checkbox key={theme.key} theme={theme} onCheck={onCheck} />
      ))}
    </S.Container>
  );
}

ThemeBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  themes: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
};
