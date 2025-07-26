import { NextRequest, NextResponse } from 'next/server';
import { notion, NOTION_DATABASE_ID, handleNotionError } from '@/lib/notion/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      { error: 'Missing or invalid "slug" query parameter.' },
      { status: 400 },
    );
  }

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    return NextResponse.json(response.results[0]);
  } catch (error) {
    const errorResponse = handleNotionError(error);
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
