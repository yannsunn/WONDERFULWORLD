'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scrollViewport } from '@/lib/animations';

const GoodsSection = () => {
  // Sample goods data - in production, would come from Shopify API or CMS
  const featuredGoods = [
    {
      id: 1,
      name: 'AI Hana 1st Photo Book',
      modelName: 'AI Hana',
      price: '¥2,000',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
      shopifyUrl: 'https://shop.wonderful-world.example/products/ai-hana-photobook',
    },
    {
      id: 2,
      name: 'AI Reina アクリルスタンド',
      modelName: 'AI Reina',
      price: '¥1,500',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      shopifyUrl: 'https://shop.wonderful-world.example/products/ai-reina-acrylic-stand',
    },
    {
      id: 3,
      name: 'オリジナルTシャツ（ホワイト）',
      modelName: 'WONDERFUL WORLD',
      price: '¥3,500',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      shopifyUrl: 'https://shop.wonderful-world.example/products/original-tshirt',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Official Goods
          </h2>
          <p className="text-lg text-gray-600">
            オフィシャルグッズでモデルを応援
          </p>
        </motion.div>

        {/* Goods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {featuredGoods.map((item) => (
            <motion.div
              key={item.id}
              className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              variants={fadeInUp}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm text-accent-gold font-medium mb-2">
                  {item.modelName}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-700">
                    {item.price}
                  </span>
                  <a
                    href={item.shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent-gold text-white rounded-lg font-medium hover:bg-accent-gold/90 transition-colors text-sm"
                  >
                    購入する
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to Store */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <a
            href="https://shop.wonderful-world.example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn-primary text-lg"
          >
            オンラインストアで全商品を見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ※ 商品の詳細・在庫状況はオンラインストアでご確認ください
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoodsSection;
