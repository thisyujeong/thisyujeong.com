import { NextResponse } from 'next/server';
import { notion, NOTION_DATABASE_ID, handleNotionError } from '@/lib/notion/client';

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
    });

    return NextResponse.json(response.results);
  } catch (error) {
    const errorResponse = handleNotionError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
