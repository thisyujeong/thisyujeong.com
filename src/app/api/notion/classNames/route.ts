import { handleNotionError, notion, NOTION_DATABASE_ID } from '@/lib/notion/client';
import type { NotionPage } from '@/lib/notion/schema';
import { NextResponse } from 'next/server';

/**
 * 클래스 이름 목록 조회
 * @returns 클래스 이름 목록
 */
export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Class',
        select: {
          is_not_empty: true,
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

    const classNames = new Set(
      (response.results as NotionPage[])
        .map(item => item.properties?.Class?.select?.name)
        .filter((name): name is string => typeof name === 'string'),
    );

    return NextResponse.json(Array.from(classNames));
  } catch (error) {
    const errorResponse = handleNotionError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
