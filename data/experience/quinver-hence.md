---
title: 퀸버스퀘어 HENCE (헨스)
description: 사용자가 자신의 취향 탐색과 소비를 한 플랫폼에서 가능하도록 SNS와 쇼핑이 결합된 모바일 웹뷰 하이브리드 앱 서비스
startDate: 2023.03
endDate: 2023.10
type: 웹뷰 하이브리드 앱
tags: [React, Typescript, SCSS, React-hook-form]
thumbnailUrl: '/assets/images/thumbnail-hence.png'
---

> 헨스는 사용자가 자신의 취향 탐색과 소비를 한 플랫폼에서 가능하도록 SNS와 쇼핑이 결합된 모바일 웹뷰 하이브리드 앱 서비스입니다.  
> **Deploy**: [App store](https://apps.apple.com/kr/app/%ED%97%A8%EC%8A%A4-hence/id6466147683) / [Play store](https://play.google.com/store/apps/details?id=com.quinvir.hence.henceapp&pcampaignid=web_share)

## 기여한 부분

- 공통된 UI 컴포넌트 개발 및 페이지 단위의 퍼블리싱을 담당하여 일관된 UI 구현
- useGesture 라이브러리를 도입하여 피드 새로고침, 바텀시트 등 **제스처 기반 기능 개발**
- **react-hook-form** 을 활용한 폼 유효성 검사 및 상태 관리 최적화
- 웹뷰에서의 자연스러운 사용자 경험을 위해 **크로스 브라우징 최적화** 수행 (트러블 슈팅)
  - https://thisyujeong.dev/blog/ios-input-troubleshooting
  - iOS Safari의 가상 키보드로 인한 입력 필드 가림 및 화면 밀림 문제를 분석하고 해결
  - 뷰포트 재조정 방식이 원인임을 파악하여 CSS 속성과 브라우저 API를 활용해 최적화하며, 사용자 경험을 개선하고 안정적인 동작 구성
