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
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-28">
        <div className="container max-w-4xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <ScrollReveal>
            <Link
              href="/business/ai-models/news"
              className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 mb-6 sm:mb-8 font-semibold text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ニュース一覧に戻る
            </Link>
          </ScrollReveal>

          {/* Article */}
          <article className="card p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Header */}
            <ScrollReveal>
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                  <time className="text-xs sm:text-sm font-medium text-gray-500">
                    {post.date}
                  </time>
                  <span className="px-2 sm:px-3 py-1 text-xs font-semibold rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                  {post.title}
                </h1>
              </div>
            </ScrollReveal>

            {/* Thumbnail */}
            {post.thumbnail && (
              <ScrollReveal delay={0.2}>
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] mb-6 sm:mb-8 rounded-lg overflow-hidden">
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
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none px-4
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
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <Link
                  href="/business/ai-models/news"
                  className="btn-primary inline-flex items-center w-full sm:w-auto justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
