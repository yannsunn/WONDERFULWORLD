import { designTokens } from '@/data/design-tokens';
import { motion } from 'framer-motion';

const colors = [
  { label: 'Primary 500', value: designTokens.colors.primary[500] },
  { label: 'Primary 700', value: designTokens.colors.primary[700] },
  { label: 'Accent Gold', value: designTokens.colors.accent.gold },
  { label: 'Accent Rose', value: designTokens.colors.accent.rose },
  { label: 'Accent Sand', value: designTokens.colors.accent.sand },
];

const gradients = [
  { label: 'Primary', value: designTokens.gradients.primary },
  { label: 'Sunset', value: designTokens.gradients.sunset },
  { label: 'Luxury Gold', value: designTokens.gradients.luxuryGold },
];

const typographySamples = [
  {
    label: 'Heading XL',
    style: designTokens.typography.responsiveScale.xl,
    text: 'Figma Inspired Luxury',
  },
  {
    label: 'Heading LG',
    style: designTokens.typography.responsiveScale.lg,
    text: 'AI × Beauty Premium',
  },
  {
    label: 'Body',
    style: designTokens.typography.responsiveScale.body,
    text: '女性が輝く未来をデザインで支える。',
  },
];

export default function DesignLanguageShowcase() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: designTokens.gradients.primary }}
        />
        <div className="absolute inset-0 mix-blend-screen opacity-90 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_60%)]" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.3em] mb-6">
            Figma MCP READY
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
            デザインシステムをそのまま体験
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Figma MCPから同期されたトークンをNext.jsに直結。ブランド一貫性を保ちつつ、
            ページ全体のトーン&マナーを即座にアップデートできます。
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 border border-white/20 text-white/90"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Palette</p>
                <h3 className="text-2xl font-bold">Color Tokens</h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                FIGMA ↔ NEXT
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {colors.map(color => (
                <div key={color.label} className="space-y-3">
                  <div
                    className="h-24 rounded-2xl border border-white/10 shadow-lg"
                    style={{ backgroundColor: color.value }}
                  />
                  <div>
                    <p className="text-sm font-semibold">{color.label}</p>
                    <p className="text-xs text-white/70 font-mono">{color.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gradients & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-glass p-8 border border-white/20 text-white/90 space-y-10"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Gradient</p>
                  <h3 className="text-2xl font-bold">Signature Blend</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Tokenized
                </span>
              </div>
              <div className="grid gap-4">
                {gradients.map(gradient => (
                  <div key={gradient.label} className="space-y-2">
                    <div
                      className="h-16 rounded-2xl shadow-lg border border-white/10"
                      style={{ backgroundImage: gradient.value }}
                    />
                    <p className="text-sm font-semibold">{gradient.label}</p>
                    <p className="text-xs text-white/70 font-mono break-all">{gradient.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Typography</p>
                  <h3 className="text-2xl font-bold">Responsive Scale</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Auto Layout
                </span>
              </div>
              <div className="space-y-4">
                {typographySamples.map(sample => (
                  <div
                    key={sample.label}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                      {sample.label}
                    </p>
                    <p
                      style={{
                        fontSize: sample.style.fontSize,
                        lineHeight: sample.style.lineHeight,
                        fontFamily:
                          sample.label === 'Body'
                            ? designTokens.typography.fontFamilies.sans
                            : designTokens.typography.fontFamilies.heading,
                      }}
                      className="text-white font-semibold"
                    >
                      {sample.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

