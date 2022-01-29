import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'components';
import * as S from './style';

export function TagSelected({ tags, onCheck }) {
  return (
    <S.Container>
      <div className="tag-title">지정된 필터 태그</div>
      <S.TagWrapper>
        {tags.map((tag) => (
          <Tag key={tag.key} tag={tag} onCheck={onCheck} isSelectedFilter />
        ))}
      </S.TagWrapper>
    </S.Container>
  );
}

TagSelected.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
};
