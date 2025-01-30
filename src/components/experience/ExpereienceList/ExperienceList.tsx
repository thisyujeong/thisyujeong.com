'use client';

import classNames from 'classnames/bind';
import styles from './ExperienceList.module.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useModal } from '@/components/common/Modal/ModalProvider';

const cx = classNames.bind(styles);

const examples = [
  {
    title: '한화 드림플러스 포털 개편',
    description: '한화 드림플러스의 공식 홈페이지 구축(개편) 프로젝트',
    tags: ['Javascript', 'SCSS', 'GSAP', 'i18next'],
  },
  {
    title: '삼성전자 \n삼성닷컴 프로토타입',
    description: '삼성전자 삼성닷컴(samsung.com) UI/UX 개선 관련 프로토타입 작업',
    tags: ['Javascript', 'HTML/CSS', 'SCSS', 'GSAP'],
  },
  {
    title: '삼성전자 \nSPACE UX 통합 개발',
    description:
      '사내에 분리된 5개의 서비스를 하나의 플랫폼으로 통합하여 통일된 UI/UX를 기반으로 신규 플랫폼 구축',
    tags: ['React', 'Javascript', 'SCSS'],
  },
  {
    title: '퀸버스퀘어 HENCE(헨스)',
    description:
      '사용자가 자신의 취향 탐색과 소비를 한 플랫폼에서 가능하도록 SNS와 쇼핑이 결합된 모바일 앱 서비스',
    tags: ['React', 'Javascript', 'SCSS'],
    thumbnailUrl: '/assets/images/thumbnail-hence.png',
  },
  {
    title: 'Innoboost Official Site',
    description:
      '제약 바이오 기업을 대상으로 토탈 솔루션 및 컨설팅 서비스를 제공하는 전문 에이전시의 공식 홈페이지',
    tags: ['Javascript', 'HTML/CSS', 'SCSS', 'GSAP', 'Three.js', 'Webpack'],
    thumbnailUrl: '/assets/images/thumbnail-innoboost.png',
  },
  {
    title: '삼성전자 \nSamsung Experience Plus',
    description:
      'Samsung Experience Plus는 삼성전자의 다양한 제품과 콘텐츠를 탐색할 수 있는 TV App',
    tags: ['React', 'Typescript', 'Styled-components', 'Zustand'],
    thumbnailUrl: '/assets/images/thumbnail-sep.png',
  },
  {
    title: 'SK Hynix \nSignal Design System 고도화',
    description: 'SK 하이닉스 디자인시스템 고도화',
    tags: ['React', 'Styled-components', 'Less'],
    thumbnailUrl: '/assets/images/thumbnail-sk-hynix.png',
  },
];

const ExperienceList = () => {
  const { showModal, hideModal } = useModal();
  return (
    <div className={cx('experience')}>
      <div className={cx('experience-list')}>
        {examples.map((item, i) => {
          const numbering = (i + 1).toString().padStart(2, '0');
          return (
            <ExperienceCard
              key={i}
              id={`${i * 3}`}
              title={`${numbering}. ${item.title}`}
              description={item.description}
              tags={item.tags}
              thumbnailUrl={item.thumbnailUrl}
              onClick={() => {
                showModal({
                  message: 'modal opened.....',
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceList;
