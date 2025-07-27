import { cache } from 'react';
import { NotionPageSchema, NotionPagesSchema } from './schema';

const parsePagesResponse = async (res: Response) => {
  if (!res.ok) {
    let errorMessage = 'Failed to fetch Notion data';
    try {
      const error = await res.json();
      errorMessage = error?.error || errorMessage;
    } catch {
      // fallback: do nothing, use default errorMessage
    }
    throw new Error(errorMessage);
  }

  const json = await res.json();
  const parsed = NotionPagesSchema.safeParse(json);

  if (!parsed.success) {
    console.log('Invalid JSON:', json);
    console.error(parsed.error);
    throw new Error('Invalid response schema');
  }

  return parsed.data;
};

/**
 * 모든 페이지 데이터 불러오기
 */
export const getPages = cache(async () => {
  const res = await fetch('/api/notion');
  return parsePagesResponse(res);
});

/**
 * `classification` 에 해당하는 페이지 데이터 불러오기
 * @param { string } classification
 */
export const getClassPages = cache(async (classification: string) => {
  const params = new URLSearchParams({ class: classification });
  const res = await fetch(`/api/notion/classification?${params.toString()}`);
  return parsePagesResponse(res);
});

/**
 * `slug` 에 해당하는 페이지 데이터 불러오기
 * @param { string } slug
 */
export const getPageBySlug = cache(async (slug: string) => {
  const params = new URLSearchParams({ slug });
  const res = await fetch(`/api/notion/slug?${params.toString()}`);

  if (!res.ok) {
    throw new Error('Failed to fetch Notion data');
  }

  const json = await res.json();
  const parsed = NotionPageSchema.safeParse(json);

  if (!parsed.success) {
    console.log('InvalidJSON:', json);
    console.log(parsed.error);
    throw new Error('Invalid response schema');
  }

  return parsed.data;
});

/**
 * 데이터베이스의 분류(Class) 이름 목록 조회
 * @returns 클래스 이름 목록
 */
export const getClassNames = cache(async () => {
  const res = await fetch('/api/notion/classNames');
  return res.json();
});
