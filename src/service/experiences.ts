import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data', 'experience');

export interface ExperienceType {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: string;
  tags: string[];
  thumbnailUrl?: string;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const postData: ExperienceType = {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      startDate: matterResult.data.startDate,
      endDate: matterResult.data.endDate,
      type: matterResult.data.type,
      tags: matterResult.data.tags,
      thumbnailUrl: matterResult.data.thumbnailUrl,
    };

    return postData;
  });

  return allPostsData.sort((a, b) => {
    if (a.endDate < b.endDate) return 1;
    if (a.startDate < b.startDate) return 1;
    return -1;
  }); // 내림차순
}
