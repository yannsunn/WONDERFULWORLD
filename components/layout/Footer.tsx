import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'ホーム', href: '/' },
      { name: 'モデル', href: '/business/ai-models/models' },
      { name: '会社情報', href: '/about' },
      { name: 'ニュース', href: '/business/ai-models/news' },
      { name: 'パートナー', href: '/partners' },
      { name: 'お問い合わせ', href: '/contact' },
    ],
    legal: [
      { name: '利用規約', href: '/terms' },
      { name: 'プライバシーポリシー', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram WW', href: 'https://www.instagram.com/wonderful_world.2015', icon: 'instagram' },
    { name: 'Instagram 3B', href: 'https://www.instagram.com/3bobihiro', icon: 'instagram' },
    { name: 'TikTok', href: 'https://tiktok.com/@wonderfulworld', icon: 'tiktok' },
    { name: 'X (Twitter)', href: 'https://x.com/wonderfulworld', icon: 'twitter' },
  ];

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
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
                    className="text-base text-gray-700 hover:text-orange-600 transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform duration-200"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-900">フォローする</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-pink-100 text-orange-600 hover:from-orange-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <div className="pt-4">
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
