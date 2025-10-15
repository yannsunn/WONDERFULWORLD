'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findBestMatch, getSuggestedQuestions } from '@/lib/chatbot-matcher';
import type { FAQItem } from '@/data/chatbot-faq';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export default function ChatbotStatic() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'こんにちは！✨\n\nWONDERFUL WORLDのバーチャルアシスタント、AIリナです。\n\n当サイトについて何でも聞いてくださいね！',
      timestamp: new Date(),
      suggestions: getSuggestedQuestions(undefined, 3)
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent, suggestionText?: string) => {
    e.preventDefault();
    const messageText = suggestionText || input.trim();

    if (!messageText || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // タイピングアニメーションのためのディレイ
    setTimeout(() => {
      // キーワードマッチングで最適な回答を取得
      const bestMatch: FAQItem = findBestMatch(messageText);

      const assistantMessage: Message = {
        role: 'assistant',
        content: bestMatch.answer,
        timestamp: new Date(),
        suggestions: getSuggestedQuestions(bestMatch.category, 3)
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 500); // 500-1000msのランダムディレイ
  };

  const handleSuggestionClick = (suggestion: string) => {
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
    handleSubmit(syntheticEvent, suggestion);
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="チャットボットを開く"
      >
        <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-orange-600">
          {/* AI Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">💁‍♀️</span>
          </div>

          {/* Pulse Animation when closed */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  💁‍♀️
                </div>
                <div>
                  <h3 className="font-bold text-lg">AIリナ</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    オンライン
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="チャットを閉じる"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-orange-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.role === 'user' ? 'text-orange-100' : 'text-gray-400'
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </motion.div>

                  {/* Suggestions */}
                  {message.role === 'assistant' && message.suggestions && message.suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-2 flex flex-wrap gap-2"
                    >
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={isTyping}
                  maxLength={200}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[44px]"
                  aria-label="送信"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                💡 完全無料・API不要のチャットボットです
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-24.right-6 {
            bottom: 5.5rem;
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
      `}</style>
    </>
  );
}
