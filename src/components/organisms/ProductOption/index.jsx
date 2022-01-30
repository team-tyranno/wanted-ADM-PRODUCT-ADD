import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ButtonAppend, ButtonDelete, ProductOptionImage, ProductOptionDetail } from 'components';
import * as S from './style';

export function ProductOption() {
  const [optionSets, setOptionSets] = useState([{ id: nanoid() }]);
  const [options, setOptions] = useState([{ id: nanoid() }]);

  return (
    <S.Container>
      <span className="default-text">옵션 세트를 추가하여 옵션을 구성해 주세요.</span>

      <div className="append-set">
        <ButtonAppend
          width="130px"
          height="40px"
          content="+ 옵션 세트 추가"
          onClick={() => {
            setOptionSets([...optionSets, { id: nanoid() }]);
          }}
        />
      </div>

      {optionSets.map((optionSet) => (
        <S.Wrapper key={optionSet.id}>
          <div className="delete-set">
            <ButtonDelete
              width="70px"
              height="35px"
              onClick={() => {
                setOptionSets(optionSets.filter((element) => element.id !== optionSet.id));
              }}
            />
          </div>

          <ProductOptionImage />

          {options.map((option) => (
            <ProductOptionDetail key={option.id} />
          ))}

          <div className="append-option">
            <ButtonAppend
              width="100%"
              height="54px"
              content="+ 옵션 추가"
              onClick={() => {
                setOptions([...options, { id: nanoid() }]);
              }}
            />
          </div>
        </S.Wrapper>
      ))}
    </S.Container>
  );
}
