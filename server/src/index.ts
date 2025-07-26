import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

const app = express();
const port = 5174; // Vite와 포트 겹치지 않게

app.use(cors());

// Notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID as string;

app.get('/api/notion', async (req, res) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    res.json(response.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Notion data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
