<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>

<br />
<div align="center">

  <h3 align="center">2주차 과제 - 설로인</h3>

  <p align="center">
    상품 등록 페이지를 구현한 과제입니다.
    <br />
    <br />
    <a href="friendly-engelbart-d4927f"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

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
    <li><a href="#프로젝트-구조">프로젝트 </a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>
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

- 가능한 라이브러리를 사용하지 않고 과제를 수행하는 것을 목표로 했습니다

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능

- [x] 노출 및 판매기간 설정
  - [x] 라디오 버튼 및 시간 인풋 구현
  - [x] 노출 시작 시간보다 빠른 종료 시간, 혹은 종료 시간보다 빠른 노출 시작 시간이 입력될 경우 인풋 초기화

- [x] 상품 배송, 상품 혜택 허용 및 기타 설정
  - [x] 스위치 버튼 구현
  - [x] '사용자 배송일 출발일 지정' 혹은 '방문 수령' 을 활성화할 경우 '선 주문 예약 배송' 비활성화. 
  - [x] '선 주문 예약 배송' 활성화할 경우 '사용자 배송일 출발일 지정' 및 '방문 수령' 비활성화

- [x] 상품 소개 이미지, 구매자 추천 이미지 업로드
  - [x] 이미지 업로드 시 업로드한 파일 리스트 구현
  - [x] 업로드한 파일 리스트에서 삭제

- [x] 상품 정보 고시
  - [x] 항목 추가 및 삭제 구현

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

### Prerequisites

1. npm

```sh
npm install npm@latest -g
```

### Installation

1. Repo를 clone한다
   ```sh
   git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
   ```
2. NPM pakage들을 설치한다
   ```sh
   npm install
   ```
3. localhost에서 프로젝트를 실행한다
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

프로젝트 구조를 작성할 영역입니다(Optional).

```bash
├── public
│   ├── index.html
├── src
│   ├── components   # Atomic Design에 따른 컴포넌트
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   ├── pages    # 전체 페이지 컴포넌트
│   ├── styles   # global style
│   ├── assets   # 이미지, 아이콘, 폰트
│   ├── hooks
│   ├── constants
│   └── utils
└── some_more_file.xxx
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

라이센스를 표시할 영역입니다.

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
