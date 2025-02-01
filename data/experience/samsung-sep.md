---
title: 삼성전자 Samsung Experience Plus
description: Samsung Experience Plus는 삼성전자의 다양한 제품과 콘텐츠를 탐색할 수 있는 TV Web App 서비스 입니다.
startDate: 2022.06
endDate: 2023.03
type: TV Web App
tags: [React, Typescript, Styled-components, Zustand]
thumbnailUrl: '/assets/images/thumbnail-sep.png'
---

> 기존 삼성닷컴 홈페이지와 Youtube 채널에서 제공되는 삼성전자 제품 정보, 제품별 콘텐츠, 라이브 프로모션을 TV 애플리케이션에서 한 번에 경험할 수 있는 OTT형태의 웹앱입니다.

## 기여한 부분

- React.js와 TypeScript를 활용하여 다양한 삼성전자 제품 및 콘텐츠 탐색 기능을 제공하는 TV 애플리케이션 개발
- Special-navigation 라이브러리를 도입하여 TV 컨트롤러 기반 포커스 제어 기능 구현
  - [https://thisyujeong.dev/blog/spatial-navi](https://thisyujeong.dev/blog/spatial-navi)
- 애니메이션 최적화를 위해 Reflow, Repaint 성능 저하를 분석
  - 케이스별 샘플을 제작하고 다양한 TV 디바이스에서 테스트하여 연산 비용을 최적화
- TV Web Engine별 스타일 대응, 디바이스마다 상이한 Web 환경을 분석하여 최적화 적용
- Zustand 라이브러리를 활용한 전역 상태 관리, TV 환경에서도 효율적인 상태 유지 및 성능 개선
