declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      FIGMA_ACCESS_TOKEN?: string;
      FIGMA_FILE_KEY?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_SITE_URL?: string;
      NEXT_PUBLIC_CONTACT_EMAIL?: string;
      NEXT_PUBLIC_VERCEL_ANALYTICS?: string;
    }
  }
}

export {};
