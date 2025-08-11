'use client';

import React from 'react';
import styles from './ProjectContent.module.scss';
import classnames from 'classnames/bind';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import './rose-pine-dawn.css';

const cx = classnames.bind(styles);

interface ProjectContentProps {
  content: string;
}

const components: Components = {
  a: ({ node, ...props }) => (
    <a className={cx('anchor')} target="_blank" rel="noopener noreferrer" {...props} />
  ),
  code: ({ node, className, children, ...props }) => {
    return (
      <code className={cx('code', className)} {...props}>
        {children}
      </code>
    );
  },
};

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <div className={cx('project-content')}>
      <div className={cx('markdown')}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks, remarkToc]}
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings]}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectContent;
