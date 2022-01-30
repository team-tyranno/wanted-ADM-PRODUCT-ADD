import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ButtonAppend, ButtonDelete, ProductOptionDetail } from 'components';
import * as S from './style';

export function ProductOptionForm() {
  const [options, setOptions] = useState([{ id: nanoid() }]);

  return (
    <>
      {options.map((option) => (
        <S.Wrapper key={option.id}>
          <div className="delete-option">
            <ButtonDelete
              width="60px"
              height="32px"
              onClick={() => {
                setOptions(options.filter((element) => element.id !== option.id));
              }}
            />
          </div>

          <div className="option-name">
            <input type="text" placeholder="옵션명을 입력해 주세요. (필수)" />
          </div>

          <div className="option-info">
            <input className="price" type="text" placeholder="상품 정상가 (필수)" />원
            <span>
              할인율: <b>38%</b>
            </span>
            <input className="price" type="text" placeholder="상품 판매가 (필수)" />원
            <input className="stock" type="text" placeholder="재고 (필수)" />개
            <select name="tax">
              <option value="non-taxable">비과세</option>
              <option value="taxable">과세</option>
            </select>
          </div>

          <ProductOptionDetail />
        </S.Wrapper>
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
    </>
  );
}
