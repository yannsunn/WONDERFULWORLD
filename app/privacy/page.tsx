import type { Metadata } from 'next';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | WONDERFUL WORLD',
};

const PrivacyPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-white pt-28">
        <div className="container max-w-4xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              プライバシーポリシー
            </h1>
          </ScrollReveal>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <ScrollReveal delay={0.1}>
              <div className="card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 bg-gradient-to-br from-white to-orange-50/20">
                <p className="text-sm sm:text-base text-gray-600 mb-0 px-4">
                  WONDERFUL WORLD（以下「当社」）は、お客様の個人情報保護の重要性について認識し、
                  個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、
                  以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取扱い及び保護に努めます。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">1. 個人情報の定義</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
              すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
              特定の個人を識別することができるもの（他の情報と容易に照合することができ、
              それにより特定の個人を識別することができることとなるものを含みます。）、
              もしくは個人識別符号が含まれる情報を意味するものとします。
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">2. 個人情報の取得</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              当社は、偽りその他不正の手段によらず適正に個人情報を取得いたします。
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">3. 個人情報の利用目的</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 px-4">当社は、お客様から取得した個人情報を、以下の目的のために利用いたします。</p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 px-4">
              <li>お問い合わせへの対応のため</li>
              <li>当社サービスに関する情報提供のため</li>
              <li>当社サービスの改善、新サービスの開発等に役立てるため</li>
              <li>その他、上記利用目的に付随する目的のため</li>
            </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">4. 個人情報の第三者提供</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              当社は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、
              あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <section className="mb-6 sm:mb-8 card p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">5. お問い合わせ</h2>
            <p className="text-sm sm:text-base text-gray-700 px-4">
              個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。<br />
              <br />
              WONDERFUL WORLD Project<br />
              Email: privacy@wonderful-world.example
            </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
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

export default PrivacyPage;
