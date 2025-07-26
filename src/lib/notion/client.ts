import { Client } from '@notionhq/client';

// 환경 변수 검증
const notionToken = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!notionToken) {
  throw new Error('NOTION_TOKEN environment variable is required');
}

if (!databaseId) {
  throw new Error('NOTION_DATABASE_ID environment variable is required');
}

// Notion 클라이언트 인스턴스 생성
export const notion = new Client({ auth: notionToken });
export const NOTION_DATABASE_ID = databaseId;

// 공통 에러 처리 함수
export const handleNotionError = (error: unknown) => {
  console.error('Notion API Error:', error);
  return { error: 'Failed to fetch Notion data' };
};
