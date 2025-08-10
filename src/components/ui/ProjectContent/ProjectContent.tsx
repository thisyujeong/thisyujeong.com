import React from 'react';
import styles from './ProjectContent.module.scss';
import classnames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

const cx = classnames.bind(styles);

interface ProjectContentProps {
  content: string;
}

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <div className={cx('project-content')}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ProjectContent;
