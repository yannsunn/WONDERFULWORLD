import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getAllNews, getNewsBySlug } from '@/data/news';

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return getAllNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return {
      title: 'ニュース | WONDERFUL WORLD 合同会社',
    };
  }

  return {
    title: `${article.title} | WONDERFUL WORLD`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [{ url: article.heroImage }],
    },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt);
  const isNew = Date.now() - publishedDate.getTime() <= 1000 * 60 * 60 * 24 * 7;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
              <Link
                href="/business/ai-models/news"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 font-semibold"
              >
                <span aria-hidden>&larr;</span>
                ニュース一覧へ
              </Link>
              <span>AI Model Influencer News</span>
            </div>

            <header className="text-center max-w-4xl mx-auto mb-10">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-600">
                {article.category}
                {isNew && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-500 text-white tracking-wide">
                    NEW
                  </span>
                )}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-3">
                {article.title}
              </h1>
              {article.subtitle && <p className="text-lg text-gray-600">{article.subtitle}</p>}
              <div className="flex flex-wrap items-center gap-4 justify-center text-sm text-gray-500 mt-4">
                <time className="font-semibold" dateTime={article.publishedAt}>
                  {dateFormatter.format(publishedDate)}
                </time>
                {article.location && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-7.333 8-14a8 8 0 10-16 0c0 6.667 8 14 8 14z" />
                    </svg>
                    {article.location}
                  </span>
                )}
              </div>
            </header>
          </ScrollReveal>

          <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/60 mb-12">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority={article.slug === 'best-of-miss-tokyo-2025'}
              sizes="(max-width: 768px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          <article className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            {article.excerpt && (
              <p className="text-xl text-gray-600 font-medium leading-relaxed border-l-4 border-orange-300 pl-4">
                {article.excerpt}
              </p>
            )}
            {article.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {article.highlights && (
              <div className="my-8 rounded-2xl border border-orange-100 bg-orange-50/70 p-6">
                <h2 className="text-lg font-semibold text-orange-600 mb-4">ハイライト</h2>
                <ul className="space-y-2 text-gray-700">
                  {article.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/business/ai-models/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:-translate-y-0.5 transition-transform duration-200"
            >
              <span aria-hidden>&larr;</span>
              ニュース一覧へ戻る
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
