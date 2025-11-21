export const designTokens = {
  colors: {
    primary: {
      50: '#fdf8f6',
      100: '#f8ebe3',
      200: '#f3d8c8',
      300: '#ebbfa3',
      400: '#e19d77',
      500: '#d97f52',
      600: '#c96541',
      700: '#a85037',
      800: '#884333',
      900: '#6f3a2d',
    },
    accent: {
      gold: '#D4AF37',
      rose: '#E8B4B8',
      sand: '#F5E6D3',
    },
    neutrals: {
      50: '#fdfdfd',
      100: '#f8f8f8',
      200: '#f0f0f0',
      300: '#dcdcdc',
      400: '#b8b8b8',
      500: '#9e9e9e',
      600: '#6c6c6c',
      700: '#4d4d4d',
      800: '#2f2f2f',
      900: '#131313',
    },
  },
  gradients: {
    primary: 'linear-gradient(90deg, #f97316, #ec4899)',
    sunset: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    luxuryGold: 'linear-gradient(135deg, #d4af37 0%, #f4e5c2 50%, #d4af37 100%)',
    mesh: [
      'radial-gradient(at 0% 0%, rgba(249, 115, 22, 0.1) 0px, transparent 50%)',
      'radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)',
      'radial-gradient(at 100% 100%, rgba(249, 115, 22, 0.08) 0px, transparent 50%)',
      'radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.08) 0px, transparent 50%)',
    ],
  },
  typography: {
    fontFamilies: {
      sans: `'Inter', system-ui, sans-serif`,
      heading: `'Playfair Display', serif`,
    },
    responsiveScale: {
      xl: { fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.2 },
      lg: { fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', lineHeight: 1.3 },
      md: { fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', lineHeight: 1.4 },
      body: { fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', lineHeight: 1.8 },
    },
  },
  spacing: {
    section: {
      mobile: '5rem',
      tablet: '7rem',
      desktop: '8rem',
    },
    container: {
      default: '1280px',
      premium: '1400px',
      narrow: '900px',
      padding: '1.5rem',
    },
  },
  effects: {
    shadows: {
      default: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      premium:
        '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
      premiumHover:
        '0 4px 16px rgba(249, 115, 22, 0.08), 0 8px 32px rgba(249, 115, 22, 0.12), 0 16px 64px rgba(249, 115, 22, 0.16)',
      glass: '0 8px 32px rgba(0, 0, 0, 0.08)',
    },
    glassmorphism: {
      background: 'rgba(255, 255, 255, 0.85)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      blur: 'blur(20px)',
    },
  },
} as const;

export type DesignTokens = typeof designTokens;

