import { NextResponse } from 'next/server';
import { notion, NOTION_DATABASE_ID, handleNotionError } from '@/lib/notion/client';

/**
 * 모든 페이지 데이터 불러오기
 */
export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Release',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'EndDate',
          direction: 'descending',
        },
        {
          property: 'StartDate',
          direction: 'descending',
        },
      ],
    });

    return NextResponse.json(response.results);
  } catch (error) {
    const errorResponse = handleNotionError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
