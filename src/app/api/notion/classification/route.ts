import { NextRequest, NextResponse } from 'next/server';
import { notion, NOTION_DATABASE_ID, handleNotionError } from '@/lib/notion/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const classParam = searchParams.get('class');

  if (!classParam) {
    return NextResponse.json(
      { error: 'Missing or invalid "class" query parameter.' },
      { status: 400 },
    );
  }

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: 'Release',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Class',
            select: {
              equals: classParam,
            },
          },
        ],
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
