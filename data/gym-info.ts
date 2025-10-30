// 3BGYM - ジム事業情報データ

export interface GymFeature {
  title: string;
  description: string;
  icon: string;
}

export interface PricePlan {
  name: string;
  price: number;
  duration?: string;
  features: string[];
}

export interface GymLocation {
  name: string;
  postalCode: string;
  address: string;
  mapUrl: string;
  latitude?: number;
  longitude?: number;
  googleMapsPlaceId?: string;
}

export interface GymInfo {
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  externalUrl: string;
  concept: {
    title: string;
    content: string;
  };
  features: GymFeature[];
  pricing: {
    membership: PricePlan;
    entry: PricePlan;
    visitor: PricePlan;
  };
  hours: {
    open: string;
    close: string;
    description: string;
  };
  location: {
    headquarters: GymLocation;
  };
  cta: {
    primary: { text: string; url: string };
    secondary: { text: string; url: string };
  };
}

export const gymInfo: GymInfo = {
  name: '3BGYM',
  tagline: '3B body build beauty',
  subtitle: 'お洒落なプライベートジム',
  description: '健康的な身体が美しさを作る！セミプライベートジムでダイエットと健康維持を総合的にサポートします。',

  externalUrl: 'https://3bgym.net',

  concept: {
    title: 'コンセプト',
    content: '健康的な身体が美しさを作る。おしゃれな隠れ家的空間で、あなたの可能性を最大限に引き出します。'
  },

  features: [
    {
      title: 'セミプライベート空間',
      description: '最大3人まで利用可能な90分セッション。おしゃれな隠れ家的空間で集中してトレーニング。',
      icon: '🏋️'
    },
    {
      title: '作業療法士監修',
      description: '専門家が監修したトレーニングプログラムで、安全かつ効果的にボディメイク。',
      icon: '👨‍⚕️'
    },
    {
      title: 'デザイナー空間',
      description: 'デザイナー照明とアートウォールが彩る、モチベーションの上がる空間。',
      icon: '✨'
    },
    {
      title: 'ピラティスレッスン',
      description: '柔軟性とコアを鍛えるピラティスレッスンも提供。',
      icon: '🧘'
    }
  ],

  pricing: {
    membership: {
      name: '月額制トレーニング',
      price: 6600,
      duration: '月',
      features: [
        '月額制で通い放題',
        'セミプライベート空間',
        '90分セッション',
        '最大3人まで'
      ]
    },
    entry: {
      name: '事務手数料',
      price: 3300,
      features: ['入会時のみ']
    },
    visitor: {
      name: 'ビジター',
      price: 2200,
      duration: '回',
      features: ['都度払い', '事前予約制']
    }
  },

  hours: {
    open: '9:00',
    close: '21:00',
    description: '営業時間 9:00-21:00'
  },

  location: {
    headquarters: {
      name: '本社（帯広）',
      postalCode: '080-0803',
      address: '北海道帯広市東3条南10丁目15-1',
      mapUrl: 'https://www.google.com/maps/place/北海道帯広市東3条南10丁目15-1/@42.9193,143.2039,17z',
      latitude: 42.9193,
      longitude: 143.2039,
      googleMapsPlaceId: 'ChIJXXXXXXXXXXXXXXXXXXXXXX' // 実際のPlace IDが必要な場合
    }
  },

  cta: {
    primary: {
      text: '公式サイトで詳しく見る',
      url: 'https://3bgym.net'
    },
    secondary: {
      text: 'お問い合わせ',
      url: '/contact'
    }
  }
};

export default gymInfo;
