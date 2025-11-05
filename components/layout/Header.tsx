'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: DropdownItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
        setIsBusinessDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'ホーム', href: '/' },
    { name: '会社情報', href: '/about' },
    {
      name: '事業案内',
      href: '#',
      dropdown: [
        { name: 'AIモデルインフルエンサー', href: '/business/ai-models' },
        { name: 'ジム事業（3BGYM）', href: '/business/gym' },
      ]
    },
    { name: 'パートナー', href: '/partners' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl border-b-2 border-gradient-to-r from-orange-200/50 via-pink-200/50 to-orange-200/50">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 opacity-80"></div>

      <nav className="container mx-auto px-6 sm:px-8 lg:px-12" aria-label="メインナビゲーション">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Ultra Enhanced */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-orange-200 group-hover:ring-4 group-hover:ring-orange-400 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-300/50">
              <Image
                src="/images/about/company-logo.jpg"
                alt="WONDERFUL WORLD"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                sizes="56px"
              />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold gradient-text transition-all duration-500 group-hover:scale-105 relative">
              WONDERFUL WORLD
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <button
                    className="px-5 py-3 text-base font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 flex items-center gap-2 relative group/nav"
                    onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                    aria-expanded={isBusinessDropdownOpen}
                    aria-haspopup="true"
                    aria-label="事業案内メニュー"
                  >
                    {item.name}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="absolute -bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  {isBusinessDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 py-3 overflow-hidden"
                      onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                      onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                      role="menu"
                      aria-label="事業案内サブメニュー"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-200"
                          onClick={() => setIsBusinessDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-base font-semibold text-gray-700 hover:text-orange-600 transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-3 text-base font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 relative group/nav"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              )
            ))}
            {/* Language switcher placeholder */}
            <div className="ml-4 px-4 py-2 text-sm font-medium text-gray-400 border-l-2 border-gray-200">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-bold">JP</span>
            </div>
          </div>

          {/* Mobile menu button - Enhanced */}
          <button
            type="button"
            className="lg:hidden relative w-12 h-12 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-pink-50 text-orange-600 hover:from-orange-100 hover:to-pink-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu - Enhanced with backdrop */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="fixed left-0 right-0 top-20 bottom-0 bg-white z-[60] shadow-2xl border-t border-gray-100 overflow-y-auto">
            <div className="space-y-2 py-4 px-4">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="bg-gradient-to-r from-orange-50/50 to-pink-50/50 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors flex items-center justify-between"
                    onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
                    aria-expanded={isBusinessDropdownOpen}
                    aria-haspopup="true"
                    aria-label="事業案内メニュー"
                  >
                    {item.name}
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isBusinessDropdownOpen && (
                    <div className="px-3 pb-3 space-y-1 bg-white/60 backdrop-blur-sm" role="menu" aria-label="事業案内サブメニュー">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-lg transition-all duration-200"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsBusinessDropdownOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-4 text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 rounded-xl transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-5 py-4 text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 rounded-xl transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
