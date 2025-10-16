import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllNewsSlugs, getNewsPost } from '@/lib/markdown';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getNewsPost(params.slug);
    return {
      title: `${post.title} | WONDERFUL WORLD`,
      description: post.excerpt || post.title,
    };
  } catch {
    return {
      title: 'ニュース記事が見つかりません | WONDERFUL WORLD',
    };
  }
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  let post;

  try {
    post = await getNewsPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="container max-w-4xl py-12">
          {/* Back Link */}
          <ScrollReveal>
            <Link
              href="/business/ai-models/news"
              className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 mb-8 font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ニュース一覧に戻る
            </Link>
          </ScrollReveal>

          {/* Article */}
          <article className="card p-8 md:p-12">
            {/* Header */}
            <ScrollReveal>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-sm font-medium text-gray-500">
                    {post.date}
                  </time>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
              </div>
            </ScrollReveal>

            {/* Thumbnail */}
            {post.thumbnail && (
              <ScrollReveal delay={0.2}>
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Content */}
            <ScrollReveal delay={0.3}>
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-accent-gold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:list-disc prose-ul:pl-6
                  prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-gray-700
                  prose-img:rounded-lg prose-img:shadow-lg
                  prose-blockquote:border-l-4 prose-blockquote:border-accent-gold prose-blockquote:pl-4 prose-blockquote:italic
                "
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </ScrollReveal>

            {/* Footer */}
            <ScrollReveal delay={0.4}>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/business/ai-models/news"
                  className="btn-primary inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  ニュース一覧に戻る
                </Link>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </div>
    </PageTransition>
  );
}
