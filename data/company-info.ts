// Wonderful World 合同会社 - 会社情報データ

export interface Office {
  name: string;
  postalCode: string;
  address: string;
  phone?: string;
}

export interface Content {
  title: string;
  subtitle: string;
  content: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  externalUrl?: string;
  features: string[];
}

export interface CompanyInfo {
  name: string;
  nameEn: string;
  established: string;
  representative: string;
  offices: {
    headquarters: Office;
    tokyo: Office;
  };
  philosophy: Content;
  vision: Content;
  mission: Content;
  values: Value[];
  purpose: Content;
  message: string;
  submessage: string;
  businesses: Business[];
}

export const companyInfo: CompanyInfo = {
  name: 'Wonderful World 合同会社',
  nameEn: 'Wonderful World LLC',
  established: '2024年8月',
  representative: '藤山 嘉彦',

  offices: {
    headquarters: {
      name: '本社',
      postalCode: '080-0803',
      address: '北海道帯広市東3条南10丁目15-1',
      phone: '',
    },
    tokyo: {
      name: '東京オフィス',
      postalCode: '160-0014',
      address: '東京都新宿区内藤町1-127 レックス神宮外苑 902',
      phone: '',
    }
  },

  philosophy: {
    title: 'Philosophy',
    subtitle: '企業理念',
    content: `AIと人の力を融合し、\n「ご縁」を通じて人々に"富"と"幸せ"をもたらす。\n挑戦するすべての人に誠実に寄り添い、可能性を最大限に引き出す。`
  },

  vision: {
    title: 'Vision',
    subtitle: 'ビジョン',
    content: `AI時代における新しいコンサルティング文化を創造し、\n"幸せなお金持ち"が増える社会を実現する。\n素直に学び、挑戦し、共に豊かさを分かち合う仲間の輪を広げていく。`
  },

  mission: {
    title: 'Mission',
    subtitle: 'ミッション',
    content: `AIの力を活かして、人の夢をカタチにする。\n挑戦する人の良き伴走者として、誠実に、そして共に歩む。`
  },

  values: [
    {
      title: '素直さ',
      description: 'どんな経験も学びとし、柔軟に成長を続ける',
      icon: '🌱'
    },
    {
      title: '誠実さと透明性',
      description: '顧客・パートナーとの信頼を最優先にする',
      icon: '🤝'
    },
    {
      title: '挑戦',
      description: 'AIを味方にし、新たな価値を創造する',
      icon: '🚀'
    },
    {
      title: '共創',
      description: 'ご縁を大切に、共に歩み、共に成長する',
      icon: '💫'
    },
    {
      title: '幸福の循環',
      description: '富とは心の豊かさであり、関わるすべての人に笑顔をもたらす',
      icon: '😊'
    }
  ],

  purpose: {
    title: 'Purpose',
    subtitle: '存在意義',
    content: `「人に富を与える」——\nそれは、経済的な豊かさだけでなく、"心の幸福"を育むこと。\nAIを通じて人の可能性を解き放ち、\n誰もが自分らしく、幸せに挑戦できる社会をつくる。`
  },

  message: 'AI×ご縁で、人と富をつなぐ。',
  submessage: '挑戦する人に、誠実な豊かさを。',

  businesses: [
    {
      id: 'ai-models',
      name: 'AIモデルインフルエンサー事業',
      description: 'ミスコンテストファイナリストのセカンドキャリアを支援し、AIモデルインフルエンサーとして新たな可能性を創造します。',
      image: '/images/news/top3-group.jpg',
      url: '/business/ai-models',
      features: [
        'AIモデルの育成・運営',
        'ミスコンテストファイナリスト支援',
        'Best of Miss Tokyo 2026運営協力会社',
        'グローバル展開'
      ]
    },
    {
      id: 'gym',
      name: 'ジム事業（3BGYM）',
      description: '健康的な身体が美しさを作る。セミプライベートジムで、あなたの可能性を最大化します。',
      image: '/images/business/gym/logo.jpg',
      url: '/business/gym',
      externalUrl: 'https://3bgym.net',
      features: [
        'セミプライベート空間',
        '作業療法士監修プログラム',
        '月額6,600円〜',
        'ピラティスレッスン'
      ]
    }
  ]
};

export const ceoMessage = {
  name: '藤山 嘉彦',
  title: '代表社員',
  photo: '/images/about/representative-new.jpg',

  excerpt: `「人に富を与える」——この言葉こそが、Wonderful World 合同会社の原点です。\n\n私たちは、AIの力と人のつながりをかけ合わせ、挑戦するすべての人が"心の豊かさ"と"経済的な豊かさ"の両方を得られる未来を目指しています。`,

  fullMessage: `「人に富を与える」——
この言葉こそが、Wonderful World 合同会社の原点です。

私たちは、AIの力と人のつながりをかけ合わせ、
挑戦するすべての人が"心の豊かさ"と"経済的な豊かさ"の両方を得られる未来を目指しています。

現代社会は、情報もスピードも加速し続けています。
そんな時代だからこそ、「ご縁」や「誠実さ」といった人としての温かさを大切にしたい。
AIは人を置き換えるものではなく、人の可能性を拡張させるパートナーです。

私自身、多くのご縁に支えられて成長してきました。
今度は、そのご縁を次の誰かにつなぎ、挑戦の輪を広げていきたい。
そして、挑戦するすべての人が"幸せなお金持ち"になれるよう、
誠実に寄り添いながら共に歩んでまいります。

Wonderful World 合同会社は、
AIと人の共創によって、より美しく、より豊かな世界を創造していきます。`
};

export default companyInfo;
