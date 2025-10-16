import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  excerpt?: string;
  content?: string;
}

/**
 * 全てのニュース記事のslugを取得
 */
export function getAllNewsSlugs() {
  // content/newsフォルダが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

/**
 * 全てのニュース記事のメタデータを取得（日付順）
 */
export function getAllNews(): NewsPost[] {
  // content/newsフォルダが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // 抜粋を作成（最初の160文字）
      const excerpt = content.substring(0, 160).replace(/\n/g, ' ') + '...';

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        thumbnail: data.thumbnail,
        excerpt,
      } as NewsPost;
    });

  // 日付順（新しい順）にソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * 特定のニュース記事の詳細を取得
 */
export async function getNewsPost(slug: string): Promise<NewsPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Markdownをhtmlに変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    thumbnail: data.thumbnail,
    content: contentHtml,
  };
}

/**
 * カテゴリー別にニュース記事を取得
 */
export function getNewsByCategory(category: string): NewsPost[] {
  const allNews = getAllNews();
  return allNews.filter((post) => post.category === category);
}

/**
 * 全カテゴリーを取得
 */
export function getAllCategories(): string[] {
  const allNews = getAllNews();
  const categories = allNews.map((post) => post.category);
  return Array.from(new Set(categories));
}
