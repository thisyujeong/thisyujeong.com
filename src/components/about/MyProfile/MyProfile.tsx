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
            유지보수성, 확장성, 재활용성이 높은 코드를 작성하기 위해 끊임없이 고민합니다.
            여러가지 상황에 대응하는 경험을 쌓음으로써 유연한 코드 구조를 설계하는데
            중점을 두고 있습니다.
          </p>
        </div>
        <div className={cx('description')}>
          <strong>→ 즐거운 사용자 경험을 제공하는 것을 중요하게 생각합니다</strong>
          <p>
            다채로운 인터랙션을 구현하는 데 관심이 많습니다. 새로운 기술을 배우는 것을
            즐기며, 어디서든 상황에 따라 유연하게 적응합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
