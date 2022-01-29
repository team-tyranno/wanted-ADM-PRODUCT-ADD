/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'components';
import * as S from './style';

export function TagSelect({ tags, onCheck }) {
  return (
    <S.Container>
      {tags.map((tag) => (
        <Tag key={tag.key} tag={tag} onCheck={onCheck} />
      ))}
    </S.Container>
  );
}

TagSelect.propTypes = {
  tags: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
};
