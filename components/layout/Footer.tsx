import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'ホーム', href: '/' },
      { name: 'モデル', href: '/business/ai-models/models' },
      { name: '会社情報', href: '/about' },
      { name: 'パートナー', href: '/partners' },
      { name: 'お問い合わせ', href: '/contact' },
    ],
    legal: [
      { name: '利用規約', href: '/terms' },
      { name: 'プライバシーポリシー', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-orange-50 via-pink-50 to-white border-t-2 border-orange-200">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-orange-200 group-hover:ring-orange-400 transition-all duration-300">
                <Image
                  src="/images/about/company-logo.jpg"
                  alt="WONDERFUL WORLD"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="56px"
                />
              </div>
              <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 bg-clip-text text-transparent">
                WONDERFUL WORLD
              </h3>
            </Link>
            <p className="text-base text-gray-700 leading-relaxed">
              AI×Beautyで女性が輝く、新しい世界へ。<br />
              ミスコンテストのファイナリストから生まれた<br />
              AIモデルインフルエンサープロジェクト。
            </p>
            <div className="text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-100">
              <p className="font-semibold">Wonderful World 合同会社</p>
              <p className="mt-1">所在地: 東京都 | 設立: 2024年8月</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900">サイトマップ</h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-700 hover:text-orange-600 font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900">法的情報</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-700 hover:text-orange-600 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t-2 border-orange-200">
          <p className="text-center text-base font-medium bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
            © {currentYear} WONDERFUL WORLD Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
