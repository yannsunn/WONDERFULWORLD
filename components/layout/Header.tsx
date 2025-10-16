'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="メインナビゲーション">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/about/company-logo.jpg"
                alt="WONDERFUL WORLD"
                fill
                className="object-contain transition-transform group-hover:scale-110"
                sizes="48px"
              />
            </div>
            <div className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-accent-gold to-primary-600 bg-clip-text text-transparent transition-all group-hover:scale-105">
              WONDERFUL WORLD
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-gold transition-colors rounded-lg hover:bg-primary-50 flex items-center gap-1"
                    onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                  >
                    {item.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isBusinessDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                      onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                      onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-accent-gold hover:bg-primary-50 transition-colors"
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
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-gold transition-colors rounded-lg hover:bg-primary-50"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent-gold transition-colors rounded-lg hover:bg-primary-50"
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* Language switcher placeholder */}
            <div className="ml-4 px-3 py-2 text-sm text-gray-400 border-l border-gray-200">
              JP {/* | EN - Coming soon */}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <div className="space-y-1">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-accent-gold hover:bg-primary-50 rounded-lg transition-colors flex items-center justify-between"
                    onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
                  >
                    {item.name}
                    <svg
                      className={`w-5 h-5 transition-transform ${isBusinessDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isBusinessDropdownOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-accent-gold hover:bg-primary-50 rounded-lg transition-colors"
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
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-accent-gold hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-accent-gold hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
