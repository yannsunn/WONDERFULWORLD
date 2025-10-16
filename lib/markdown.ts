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
  try {
    // content/newsフォルダが存在しない場合は空配列を返す
    if (!fs.existsSync(postsDirectory)) {
      console.warn('News directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);

          // 必須フィールドの検証
          if (!data.title || !data.date || !data.category || !data.thumbnail) {
            console.error(`Missing required fields in ${fileName}`);
            return null;
          }

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
        } catch (error) {
          console.error(`Error reading news file ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is NewsPost => post !== null);

    // 日付順（新しい順）にソート
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error getting all news:', error);
    return [];
  }
}

/**
 * 特定のニュース記事の詳細を取得
 */
export async function getNewsPost(slug: string): Promise<NewsPost> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // ファイルの存在確認
    if (!fs.existsSync(fullPath)) {
      throw new Error(`News post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // 必須フィールドの検証
    if (!data.title || !data.date || !data.category || !data.thumbnail) {
      throw new Error(`Missing required fields in ${slug}`);
    }

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
  } catch (error) {
    console.error(`Error getting news post ${slug}:`, error);
    throw error;
  }
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
