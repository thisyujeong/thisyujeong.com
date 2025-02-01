import classNames from 'classnames/bind';
import styles from './ExperienceCard.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

interface ExperienceCardProps {
  title: string;
  thumbnailUrl?: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

const ExperienceCard = ({
  title,
  thumbnailUrl,
  description,
  tags,
  onClick,
}: ExperienceCardProps) => {
  return (
    <div className={cx('card')} onClick={onClick}>
      <div className={cx('card-inner')}>
        <div className={cx('card-heading')}>
          <div className={cx('title')}>{title}</div>
          <div className={cx('desc')}>{description}</div>
          <div className={cx('tag-list')}>
            {tags.map((tag) => (
              <button className={cx('tag-item')} key={tag}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className={cx('card-content')}>
          {thumbnailUrl && (
            <div className={cx('thumbnail')}>
              <Image src={thumbnailUrl} alt={title} fill sizes="800px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
