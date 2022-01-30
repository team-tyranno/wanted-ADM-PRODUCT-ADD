import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as S from './style';

export function Checkbox({ theme, onCheck }) {
  const id = nanoid();
  const { key, name, isChecked } = theme;

  return (
    <S.Container>
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={isChecked} onChange={() => onCheck(key)} />
        <span>{name}</span>
      </label>
    </S.Container>
  );
}

Checkbox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired,
  onCheck: PropTypes.func.isRequired,
};
