'use client';

import { NotionPage } from '@/lib/notion/schema';
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface initialData {
  data: NotionPage[];
  classifications: string[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const PageDataContext = createContext<initialData>({
  data: [],
  classifications: [],
  currentTab: 'All',
  setCurrentTab: () => {},
});

export const usePageData = () => useContext(PageDataContext);

interface PageDataProviderProps {
  value: initialData;
  children: ReactNode;
}

export const PageDataProvider = ({ value, children }: PageDataProviderProps) => {
  const [currentTab, setCurrentTab] = useState('All');

  return (
    <PageDataContext.Provider value={{ ...value, currentTab, setCurrentTab }}>
      {children}
    </PageDataContext.Provider>
  );
};
