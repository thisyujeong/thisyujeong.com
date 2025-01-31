---
title: 한화 드림플러스 포털 개편
description: 한화 드림플러스의 공식 홈페이지 구축(개편)
startDate: 2024.11
endDate: 2025.01
type: 반응형 웹(미배포)
tags: [Next.js, Typescript, SCSS, i18next, React-hook-form, Zustand]
---

> 한화 드림플러스의 포털 웹페이지를 구축(개편)했습니다.  
> 드림 플러스는 스타트업들의 성장을 지원하는 프로그램과 공간을 제공하는 한화생명의 브랜드입니다.

## 기여한 부분

- 메인, 어바웃, 아티클, 상담 신청, 입주 상담, 공모지원 등의 페이지의 마크업과 Viewport 기반의 반응형 작업
- Next.js 14 버전의 App Router 방식으로 정적, 동적 페이지를 작업하고 Metadata API를 통해 SEO 최적화
- Next.js 14 버전의 서버 액션 및 API Router 활용한 데이터 처리 작업을 수행
  - 데이터 바인딩을 통해 UI와 상태를 동기화, 사용자 경험을 최적화
  - 일부 데이터를 사전 렌더링하고, 페이지네이션과 같은 동작에서 추가 데이터를 불러오도록 개선
- i18next 라이브러리를 활용하여 **App Router 기반의 다국어 지원**
  - 블로그 글: [https://thisyujeong.dev/blog/next-localization](https://thisyujeong.dev/blog/next-localization)
  - 다국어를 위한 언어셋을 ‘구글 스프레드 시트’에 관리하고, 로컬 환경에서 스크립트 명령어을 통해 json 파일을 다운로드하도록 **개발 환경 개선**
- **react-hook-form** 라이브러리를 활용하여 폼의 유효성을 체크하고 에러 케이스를 제공
- **Zustand** 라이브러리를 활용하여 전역 상태관리와 SessionStorage에 저장하여 원활한 사용자 경험을 제공
- 스크롤 이벤트 발생 시 `throttle` 을 적용하여 FAB(Floating Action Button)의 동작을 제어함
  - 불필요한 연산을 줄이고, 특정 간격마다 이벤트 핸들러가 실행되도록 제한하여 **성능 부하를 최소화**
- 반응형 컴포넌트의 유연성을 향상하기 위해 커스텀 훅을 개발하여 컴포넌트 재사용성과 유지보수성 향상
  - `size={['large', 'medium', 'small']}`와 같은 배열 형태의 Props를 받아, PC, Tablet, Mobile 환경에 따라 각각 사이즈가 동적으로 적용되도록 개선
  - 블로그 글: [https://thisyujeong.dev/blog/react-responsive-props](https://thisyujeong.dev/blog/react-responsive-props)
