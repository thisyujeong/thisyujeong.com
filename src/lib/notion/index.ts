import { NotionPagesResponseSchema } from './schema';

export const getNotionPages = async () => {
  const res = await fetch('/api/notion');

  if (!res.ok) {
    throw new Error('Failed to fetch Notion data');
  }

  const json = await res.json();

  const parsed = NotionPagesResponseSchema.safeParse(json);
  if (!parsed.success) {
    console.log('json', json);
    console.error(parsed.error);
    throw new Error('Invalid response schema');
  }

  return parsed.data;
};
