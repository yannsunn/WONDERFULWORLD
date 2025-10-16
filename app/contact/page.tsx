'use client';

import { useState } from 'react';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '一般のお問い合わせ',
    message: '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('プライバシーポリシーに同意してください');
      return;
    }

    setIsSubmitting(true);

    try {
      // In production, this would send to your API endpoint
      // For now, simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Form submission successful
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '一般のお問い合わせ',
        message: '',
        agree: false,
      });
    } catch (error) {
      // Handle error gracefully
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24">
        <div className="container max-w-3xl py-12">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Contact
              </h1>
              <p className="text-lg text-gray-600">
                お問い合わせ
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="card p-8 md:p-12">
          <p className="text-gray-700 mb-8 leading-relaxed">
            以下のフォームに必要事項をご記入の上、送信してください。<br />
            折り返し担当者よりご連絡いたします。<br />
            <span className="text-sm text-gray-500">
              （※スポンサーのご相談や取材依頼もこちらからどうぞ）
            </span>
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-green-900 mb-1">送信完了</h3>
                  <p className="text-green-800 text-sm">
                    お問い合わせありがとうございました。<br />
                    自動返信メールをお送りしております。担当者より3営業日以内にご連絡いたします。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-red-900 mb-1">エラーが発生しました</h3>
                  <p className="text-red-800 text-sm">
                    送信に失敗しました。しばらくしてから再度お試しください。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                placeholder="山田太郎"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                placeholder="example@company.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                件名
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
              >
                <option value="一般のお問い合わせ">一般のお問い合わせ</option>
                <option value="スポンサー/協業に関する相談">スポンサー/協業に関する相談</option>
                <option value="メディア取材依頼">メディア取材依頼</option>
                <option value="その他">その他</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all resize-none"
                placeholder="お問い合わせ内容を詳細にご記入ください"
              />
            </div>

            {/* Privacy Agreement */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-accent-gold border-gray-300 rounded focus:ring-accent-gold"
                />
                <span className="ml-3 text-sm text-gray-700">
                  <a href="/privacy" target="_blank" className="text-accent-gold hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </span>
                ) : (
                  '送信する'
                )}
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              ※ 必須項目は <span className="text-red-500">*</span> 印です。<br />
              お送りいただいた情報はお問い合わせ対応以外の目的で使用いたしません。
            </p>
          </form>
            </div>
          </ScrollReveal>

          {/* Alternative Contact */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>お問い合わせフォームからご連絡ください</p>
              <p className="text-xs text-gray-500 mt-2">
                担当者より3営業日以内にご返信いたします
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
