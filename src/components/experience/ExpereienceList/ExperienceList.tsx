'use client';

import classNames from 'classnames/bind';
import styles from './ExperienceList.module.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useModal } from '@/components/common/Modal/ModalProvider';
import { ExperienceType } from '@/service/experiences';

const cx = classNames.bind(styles);

interface ExperienceListProps {
  data: ExperienceType[];
}
const ExperienceList = ({ data }: ExperienceListProps) => {
  const { showModal, hideModal } = useModal();

  const handleClick = async (id: string) => {
    const data = await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    console.log(data);
    showModal({
      title: data.frontmatter.title,
      contentHTML: data.contentHtml,
    });
  };

  return (
    <div className={cx('experience')}>
      <div className={cx('experience-list')}>
        {data.map((item, i) => {
          const numbering = (i + 1).toString().padStart(2, '0');
          return (
            <ExperienceCard
              key={i}
              id={item.id}
              title={`${numbering}. ${item.title}`}
              description={item.description}
              tags={item.tags}
              thumbnailUrl={item.thumbnailUrl}
              onClick={() => handleClick(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceList;
