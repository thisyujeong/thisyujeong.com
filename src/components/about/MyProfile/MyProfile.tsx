import classNames from 'classnames/bind';
import styles from './MyProfile.module.scss';
import ProfileCanvas from '../ProfileCanvas/ProfileCanvas';

const cx = classNames.bind(styles);

const MyProfile = () => {
  return (
    <div className={cx('profile-box')}>
      <div className={cx('profile-canvas')}>
        <div className={cx('canvas')}>
          <ProfileCanvas />
        </div>
      </div>
      <div className={cx('profile-text')}>
        <h4>
          안녕하세요, <br />
          프론트엔드 개발자 <strong>이유정</strong>입니다
        </h4>

        <div className={cx('description')}>
          <strong>→ 에이전시에서 다양한 프로젝트를 경험하며 성장하고 있습니다</strong>
          <p>
            다양한 프로젝트를 수행하며 반응형 웹, TV 애플리케이션, 하이브리드 앱 등 다양한
            환경에서 최적화된 UI를 개발해왔습니다. 프로젝트마다 다른 요구 사항에 맞춰
            유지보수성, 확장성, 재사용성이 높은 코드 구조를 설계하며, 효율적인 개발
            프로세스를 고민하고 적용하는 데 집중하고 있습니다.
          </p>
        </div>
        <div className={cx('description')}>
          <strong>→ 즐거운 사용자 경험을 제공하는 것을 중요하게 생각합니다</strong>
          <p>
            GSAP, Three.js, SVG 애니메이션을 활용한 인터랙티브 웹 구현과 디자인 시스템
            고도화, 크로스 브라우징 대응, TV 및 웹뷰 최적화 등의 경험을 바탕으로 사용자
            경험 향상에 기여하고 있습니다. 새로운 기술을 탐구하며 유연하게 적응하는
            개발자로 성장해 나가고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
