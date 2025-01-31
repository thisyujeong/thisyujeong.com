import { NextRequest, NextResponse } from 'next/server';
import { remark } from 'remark';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'data', 'experience');

export async function POST(req: NextRequest) {
  const body = await req.json();

  const fullPath = path.join(postsDirectory, `${body.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return NextResponse.json({ contentHtml: contentHtml, frontmatter: matterResult.data });
}
