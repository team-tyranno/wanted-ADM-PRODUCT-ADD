import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input, InputLabelGroup, ButtonDelete, Button } from 'components';
import { PRODUCT_INFO_DATA } from 'constants';
import * as S from './style';

export function ProductInfo() {
  const [infos, setInfos] = useState([nanoid()]);
  const [columns, setColumns] = useState([nanoid()]);

  return (
    <S.Container>
      {infos.map((el, idx) => (
        <S.Wrap key={el}>
          <S.Title>
            정보고시 {idx + 1}
            <ButtonDelete
              width="60px"
              height="35px"
              onClick={() => setInfos(infos.filter((info) => info !== el))}
            />
          </S.Title>
          <S.Content>
            {PRODUCT_INFO_DATA.map(({ label, placeHolder }) => (
              <InputLabelGroup title={label} placeHolder={placeHolder} key={nanoid().toString()} />
            ))}
            {columns.map((e) => (
              <S.InputDiv key={e}>
                <Input width="29%" placeHolder="항목 제목 자유 입력" />
                <Input width="60%" placeHolder="내용을 입력해주세요." />
                <ButtonDelete
                  width="10%"
                  height="35px"
                  borderColor="#eee"
                  onClick={() => setColumns(columns.filter((column) => column !== e))}
                />
              </S.InputDiv>
            ))}
            <Button
              width="130px"
              content="+ 항목 추가"
              onClick={() => setColumns([...columns, nanoid()])}
            />
          </S.Content>
        </S.Wrap>
      ))}
      <Button
        content="+ 정보고시 추가"
        width="100%"
        height="45px"
        onClick={() => setInfos([...infos, nanoid()])}
      />
    </S.Container>
  );
}
