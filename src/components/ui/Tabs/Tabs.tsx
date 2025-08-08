'use client';

import React from 'react';
import { usePageData } from '@/contexts/PageDataContext';
import styles from './Tabs.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Tabs = () => {
  const { data, classifications, currentTab, setCurrentTab } = usePageData();

  return (
    <div className={cx('tabs')}>
      <button
        className={cx('tab', { on: currentTab === 'All' })}
        onClick={() => setCurrentTab?.('All')}
      >{`All(${data.length})`}</button>
      {classifications.map(cl => {
        const cnt = data.filter(item => item.properties.Class.select?.name === cl).length;
        return (
          <button
            key={cl}
            className={cx('tab', { on: currentTab === cl })}
            onClick={() => setCurrentTab?.(cl)}
          >
            {cl}({cnt})
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
