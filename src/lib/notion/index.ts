import { cache } from 'react';
import { NotionPageSchema, NotionPagesResponseSchema } from './schema';

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
  const parsed = NotionPagesResponseSchema.safeParse(json);

  if (!parsed.success) {
    console.log('Invalid JSON:', json);
    console.error(parsed.error);
    throw new Error('Invalid response schema');
  }

  return parsed.data;
};

export const getPages = cache(async () => {
  const res = await fetch('/api/notion');
  return parsePagesResponse(res);
});

export const getClassPages = cache(async (classification: string) => {
  const params = new URLSearchParams({ class: classification });
  const res = await fetch(`/api/notion/classification?${params.toString()}`);
  return parsePagesResponse(res);
});

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
