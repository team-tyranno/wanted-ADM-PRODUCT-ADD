<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>

<br>

<div align="center">
  <h3 align="center">2주차 과제 - 설로인</h3>
  <p align="center">
    상품 등록 페이지를 구현한 과제입니다.
    <br />
    <br />
    <a href="https://friendly-engelbart-d4927f.netlify.app"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>정서영</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>김재원</b></td>
  </tr>
  <tr>
    <td align="center"><b>항목 1~2, 16~20 구현</b></td>
    <td align="center"><b>항목 12~15 구현</b></td>
    <td align="center"><b>항목 3~9 구현</b></td>
    <td align="center"><b>항목 10~12 구현</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 과제 소개

주어진 명세서에 따라 상품 등록을 위한 페이지를 구현한 과제입니다.

- 이번 과제를 수행할 때에는 가능한 라이브러리를 사용하지 않는 것을 목표로 했습니다.

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능

- [x] 노출 및 판매 기간 설정

  - [x] 라디오 버튼 및 시간 인풋 구현
  - [x] '노출 기간 설정' 및 '판매 시간 설정' 미선택 시, 날짜 입력 비활성화
  - [x] 노출 시작 시간보다 빠른 종료 시간 혹은 종료 시간보다 빠른 노출 시작 시간이 입력될 경우, 인풋 초기화

- [x] 상품 카테고리 지정

  - [x] 생성된 카테고리 목록 체크 박스로 구성
  - [x] MOCK 데이터를 그대로 카테고리에 반영
  - [x] 체크 박스 지정 해제 또는 선택된 카테고리 X 버튼을 통해 카테고리 저장 해제 가능

- [x] 필터 태그 지정

  - [x] 제공된 필터 검색 가능
  - [x] 필터 태그 검색 결과 가장 우선순위가 높은 것으로 반영
  - [x] 필터 태그 검색창 포커스 시, 필터 태그에 등록되어 있는 모든 필터 태그가 제공
  - [x] 체크 박스 지정 해제 또는 선택된 카테고리 X 버튼을 통해 카테고리 저장 해제 가능
  - [x] 지정된 태그는 검색창 아래에 표시
  - [x] 지정된 태그 X 버튼 TAB 시, 지정되어야 함.
  - [x] 중복 선택의 경우, 중복으로 추가되지 않고 기존 지정 태그를 계속 유지

- [x] 상품 대표 썸네일

  - [x] 커머스에서 노출되는 썸네일 이미지 업로드 영역
  - [x] 이미지 첨부 버튼 TAP 후 이미지 업로드 시, 우측에 업로드한 이미지 파일명이 [X] 버튼과 함께 노출
  - [x] 이미 이미지가 업로드된 상태에서 추가 첨부 시, 기존 업로드된 이미지가 삭제되고 새로 추가된 이미지로 대체됨.

- [x] 상품 대표 이미지

  - [x] 커머스 상세 페이지 내 상단에 노출되는 대표 이미지 업로드 영역
  - [x] 이미지 첨부 버튼 TAP 후 이미지 업로드 시, 우측에 업로드한 이미지 파일명이 [X] 버튼과 함께 노출
  - [x] 이미 이미지가 업로드된 상태에서 추가 첨부 시, 최신 업로드 순으로 이미지 파일이 추가됨.

- [x] 상품 옵션 등록

  - [x] 상품 옵션 세트는 '이미지 첨부 영역'과 옵션 및 서브옵션의 '세부 내용 입력 영역'으로 구성
  - [x] 상품 옵션 세트와 옵션 세트 내의 옵션 및 서브옵션은 추가/삭제 버튼을 통해 여러 개 생성 가능
  - [x] '이미지 첨부 영역'은 옵션 세트당 1개만 존재하며, 첨부 시 해당 영역에 이미지 미리 보기 가능
  - [x] _(미완성)_ 현재 `옵션 세트`와 `옵션`, `서브옵션`의 관계가 종속적이나, 그 관계를 유기적으로 연결 짓지 못한 상황

- [x] 상품 정보 고시

  - [x] 항목 추가 및 삭제 구현

- [x] 상품 배송, 상품 혜택 허용 및 기타 설정

  - [x] 스위치 버튼 구현
  - [x] '사용자 배송일 출발일 지정' 혹은 '방문 수령'을 활성화할 경우, '선주문 예약 배송' 비활성화
  - [x] '선주문 예약 배송' 활성화할 경우, '사용자 배송일 출발일 지정' 및 '방문 수령' 비활성화
  - [x] '선주문 예약 배송' 비활성화 시, 날짜 입력 비활성화

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

### Prerequisites

- NPM Install

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repository를 Clone한다.

   ```sh
   git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
   ```

2. NPM Package들을 설치한다.

   ```sh
   npm install
   ```

3. Localhost 환경에서 프로젝트를 실행한다.

   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
├── public
│   ├── index.html
├── src
    ├── components # Atomic Design Pattern을 적용한 컴포넌트
    │   ├── atoms
    │   ├── molecules
    │   ├── organisms
    │   ├── templates
    ├── pages      # 페이지 컴포넌트
    ├── styles     # Global Style
    ├── assets     # 이미지, 아이콘, 폰트 등
    ├── constants  # 상수
    └── utils      # validator 등의 유틸 함수
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

라이센스를 표시할 영역입니다.

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
