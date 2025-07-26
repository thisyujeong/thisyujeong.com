/* notion 데이터 자동 샘플 JSON */

import { Client } from '@notionhq/client';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

async function saveNotionResponse() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const filePath = path.resolve(__dirname, 'notion-response.json');
    fs.writeFileSync(filePath, JSON.stringify(response, null, 2));

    console.log(`✅ 응답이 ${filePath}에 저장되었습니다.`);
  } catch (err) {
    console.error('❌ Notion API 요청 실패:', err);
  }
}

saveNotionResponse();
