import React from 'react';
import { ButtonDelete } from 'components';
import * as S from './style';

export function ProductOptionDetail() {
  return (
    <S.Wrapper>
      <div className="delete-option">
        <ButtonDelete width="60px" height="32px" />
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

      <div className="suboption-info">
        <span>└</span>
        <input className="name" type="text" placeholder="추가 옵션명 (필수)" />
        <input className="price" type="text" placeholder="추가 옵션 정상가 (필수)" />원
        <ButtonDelete width="60px" height="42px" />
      </div>

      <div className="append-suboption">
        <button type="button">╋</button> 추가 옵션 상품 추가
      </div>
    </S.Wrapper>
  );
}
