# React Note-App
**개발기간: 2023.10.02 ~ 2022.10.10 (약 7일)

## 배포 주소
> ** 개발 버전 ** : []() <br>

## 프로젝트 소개

사용자가 텍스트 기반의 간단한 노트를 작성하고 관리할 수 있는 웹 애플리케이션입니다. 이 앱은 React 라이브러리를 사용하여 개발되었으며, 사용자에게 편리하고 직관적인 노트 관리 환경을 제공합니다. 개인적인 노트 작성부터 프로젝트 관리, 아이디어 기록, 일정 관리, 레시피 저장 등 다양한 용도로 활용할 수 있으며, React와 관련 기술을 학습하고 응용하는 데 좋은 프로젝트 경험이었습니다.

---
## 주요 기능

### ⭐️ 노트 작성 및 편집
- 사용자는 노트를 생성하여 내용을 입력할 수 있으며, 필요한 경우 노트를 편집할 수 있습니다.

### ⭐️ 노트 목록
- 모든 작성된 노트들은 목록 형태로 표시되어, 사용자는 노트를 쉽게 찾을 수 있습니다.

### ⭐️ 실시간 저장 (Local Storage)
- 사용자가 노트 내용을 작성하거나 편집할 때, 데이터는 브라우저의 Local Storage에 저장되며 앱은 변경 내용을 실시간으로 저장하여 데이터의 손실을 방지합니다.

### ⭐️ 노트 삭제
- 사용자는 필요 없는 노트를 삭제할 수 있습니다.

### ⭐️ 노트 잠금
- 사용자는 수정을 원하지 않는 노트에 잠금 기능을 적용하여 편집을 제어할 수 있습니다.

---

## 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜Note.tsx
 ┃ ┣ 📜Sidebar.tsx
 ┃ ┗ 📜Toolbar.tsx
 ┣ 📂utils
 ┃ ┗ 📜timeForToday.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜main.tsx
```
---

## 기술 스택

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![Tailwind-CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=white)

---
## 화면 구성
| 메인 페이지(노트 선택 전)  |  메인 페이지(노트 선택 후)   |
| :-------------------------------------------: | :------------: |
|  <img width="400" alt="스크린샷 2023-11-05 오후 6 37 20" src="https://github.com/geonwooPark/note-app/assets/136573728/7348a7bb-b7a3-4179-8548-7ef42ea441ce"> |  <img width="400" alt="스크린샷 2023-11-05 오후 6 37 32" src="https://github.com/geonwooPark/note-app/assets/136573728/879ab349-9785-47a9-bad1-63c489fb22db">|  
