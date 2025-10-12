import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | WONDERFUL WORLD',
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container max-w-4xl py-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
          プライバシーポリシー
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            WONDERFUL WORLD（以下「当社」）は、お客様の個人情報保護の重要性について認識し、
            個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、
            以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取扱い及び保護に努めます。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
            <p className="text-gray-700">
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
              すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
              特定の個人を識別することができるもの（他の情報と容易に照合することができ、
              それにより特定の個人を識別することができることとなるものを含みます。）、
              もしくは個人識別符号が含まれる情報を意味するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の取得</h2>
            <p className="text-gray-700">
              当社は、偽りその他不正の手段によらず適正に個人情報を取得いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
            <p className="text-gray-700 mb-3">当社は、お客様から取得した個人情報を、以下の目的のために利用いたします。</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>お問い合わせへの対応のため</li>
              <li>当社サービスに関する情報提供のため</li>
              <li>当社サービスの改善、新サービスの開発等に役立てるため</li>
              <li>その他、上記利用目的に付随する目的のため</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-gray-700">
              当社は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、
              あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. お問い合わせ</h2>
            <p className="text-gray-700">
              個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。<br />
              <br />
              WONDERFUL WORLD Project<br />
              Email: privacy@wonderful-world.example
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            制定日：2025年10月1日
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
