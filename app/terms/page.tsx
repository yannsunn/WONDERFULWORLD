import type { Metadata } from 'next';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: '利用規約 | WONDERFUL WORLD',
};

const TermsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-white pt-28">
        <div className="container max-w-4xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              利用規約
            </h1>
          </ScrollReveal>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <ScrollReveal delay={0.1}>
              <div className="card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 bg-gradient-to-br from-white to-orange-50/20">
                <p className="text-sm sm:text-base text-gray-600 mb-0 px-4">
                  この利用規約（以下「本規約」）は、WONDERFUL WORLD（以下「当社」）が提供する
                  本ウェブサイト（以下「本サービス」）の利用条件を定めるものです。
                  利用者の皆様には、本規約に従って本サービスをご利用いただきます。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第1条（適用）</h2>
            <ol className="list-decimal pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 px-4">
              <li>本規約は、本サービスの利用に関する当社と利用者との間の権利義務関係を定めることを目的とし、
                利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
              <li>当社が本サービス上で掲載する本サービス利用に関するルール等は、本規約の一部を構成するものとします。</li>
            </ol>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第2条（禁止事項）</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 px-4">利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 px-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
              <li>他の利用者に成りすます行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第3条（免責事項）</h2>
            <ol className="list-decimal pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 px-4">
              <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
                特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）が
                ないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。</li>
            </ol>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第4条（サービス内容の変更等）</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
              これによって利用者に生じた損害について一切の責任を負いません。
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第5条（利用規約の変更）</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
              変更後の本規約は、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">第6条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 px-4">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <p className="text-xs sm:text-sm text-gray-500 mt-8 sm:mt-12 text-center px-4">
                制定日：2025年10月1日
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsPage;
