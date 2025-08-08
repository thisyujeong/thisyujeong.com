'use client';
import { NotionPage } from '@/lib/notion/schema';
import React, { createContext, useContext, ReactNode } from 'react';

export const PageDataContext = createContext<NotionPage[]>([]);

export const usePageData = () => useContext(PageDataContext);

interface PageDataProviderProps {
  value: any;
  children: ReactNode;
}

export const PageDataProvider = ({ value, children }: PageDataProviderProps) => (
  <PageDataContext.Provider value={value}>{children}</PageDataContext.Provider>
);
