import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ButtonDelete } from 'components';

export function ProductOptionDetail() {
  const [suboptions, setSuboptions] = useState([]);

  return (
    <>
      {suboptions.map((suboption) => (
        <div key={suboption.id} className="suboption-info">
          <span>└</span>
          <input className="name" type="text" placeholder="추가 옵션명 (필수)" />
          <input className="price" type="text" placeholder="추가 옵션 정상가 (필수)" />원
          <ButtonDelete
            width="60px"
            height="42px"
            onClick={() => {
              setSuboptions(suboptions.filter((element) => element.id !== suboption.id));
            }}
          />
        </div>
      ))}

      <div className="append-suboption">
        <button
          type="button"
          onClick={() => {
            setSuboptions([...suboptions, { id: nanoid() }]);
          }}
        >
          ╋
        </button>
        추가 옵션 상품 추가
      </div>
    </>
  );
}
