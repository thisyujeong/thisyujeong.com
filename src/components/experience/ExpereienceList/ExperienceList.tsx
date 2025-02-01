'use client';

import classNames from 'classnames/bind';
import styles from './ExperienceList.module.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { useModal } from '@/components/common/Modal/ModalProvider';
import { ExperienceType } from '@/service/experiences';
import { LoadingSpinner } from '@/components/common';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface ExperienceListProps {
  data: ExperienceType[];
}
const ExperienceList = ({ data }: ExperienceListProps) => {
  const { showModal, hideModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (id: string) => {
    setIsLoading(true);
    const { contentHtml, frontmatter } = await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    setIsLoading(false);
    showModal({
      title: frontmatter.title,
      startDate: frontmatter.startDate,
      endDate: frontmatter.endDate,
      tags: frontmatter.tags,
      type: frontmatter.type,
      thumbnailUrl: frontmatter.thumbnailUrl,
      contentHtml,
    });
  };

  return (
    <>
      <div className={cx('experience')}>
        <div className={cx('experience-list')}>
          {data.map((item, i) => {
            const numbering = (i + 1).toString().padStart(2, '0');
            return (
              <ExperienceCard
                key={i}
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
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default ExperienceList;
