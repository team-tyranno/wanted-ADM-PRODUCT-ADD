import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTheme } from 'components';
import * as S from './style';

export function ThemeSelected({ checkedLists, onCheck }) {
  return (
    <S.Container>
      {checkedLists.length ? (
        checkedLists.map((checkedList) => (
          <ButtonTheme
            type="button"
            key={checkedList.key}
            text={checkedList.name}
            onCheck={() => onCheck(checkedList.key)}
          >
            {checkedList.name}
          </ButtonTheme>
        ))
      ) : (
        <S.Text>카테고리를 지정해 주세요.</S.Text>
      )}
    </S.Container>
  );
}

ThemeSelected.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  checkedLists: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
};
