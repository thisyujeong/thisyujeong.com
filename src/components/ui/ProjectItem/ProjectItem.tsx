import React from 'react';
import classnames from 'classnames/bind';
import styles from './ProjectItem.module.scss';

const cx = classnames.bind(styles);

interface ProjectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  startDate: string;
  endDate: string;
  classification: string;
}

const ProjectItem = ({
  className,
  title,
  startDate,
  endDate,
  classification,
  ...props
}: ProjectItemProps) => {
  return (
    <div className={cx('project-item', className, 'hover-target')} {...props}>
      <p className={cx('project-title')}>{title}</p>
      <span className={cx('project-date')}>
        {startDate} ~ {endDate}
      </span>
      <span className={cx('project-class')}>{classification}</span>
    </div>
  );
};

export default ProjectItem;
