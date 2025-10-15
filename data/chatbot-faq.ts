// WONDERFUL WORLD Chatbot FAQ Database
// 完全静的・API不要のキーワードベースチャットボット

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: 'about' | 'models' | 'projects' | 'contact' | 'navigation' | 'general';
  priority: number; // マッチング優先度（高いほど優先）
}

export const chatbotFAQ: FAQItem[] = [
  // =================================
  // カテゴリ: WONDERFUL WORLDについて
  // =================================
  {
    id: 'about-001',
    question: 'WONDERFUL WORLDとは何ですか？',
    answer: 'WONDERFUL WORLDは、AI技術と美の力で女性が輝く新しい世界を創造するプロジェクトです✨\n\nミスコンテストのファイナリストから生まれたAIモデルインフルエンサーたちが、新たなキャリアの場として活躍しています。女性たちに経済的自立とグローバルな活躍の機会を提供することを目指しています！',
    keywords: ['WONDERFUL WORLD', 'ワンダフルワールド', 'とは', '何', 'どんな', 'プロジェクト', '概要', '説明'],
    category: 'about',
    priority: 100
  },
  {
    id: 'about-002',
    question: 'ミッションは何ですか？',
    answer: '私たちのミッションは3つあります！🎯\n\n1. AI技術と美の力で女性の可能性を広げる\n2. ミスコンテスト出場者に新たなキャリア機会を提供\n3. 経済的な収入とキャリア形成の機会を創出\n\n「女性たちが、いつからでも挑戦できる社会」を作ることを目指しています💪',
    keywords: ['ミッション', '目的', '目標', '理念', 'ビジョン', '何のため', 'なぜ'],
    category: 'about',
    priority: 90
  },
  {
    id: 'about-003',
    question: 'どのような活動をしていますか？',
    answer: '主な活動は以下の通りです！\n\n📱 AIモデルインフルエンサーの育成と運営\n🎓 女性へのAI技術教育とキャリア支援\n🌟 ミスコンテストファイナリストのセカンドキャリア創出\n🤝 企業とのコラボレーション\n\n詳しくは「プロジェクト」ページをご覧ください！',
    keywords: ['活動', '何をしている', '事業', '取り組み', 'やっている', '内容'],
    category: 'about',
    priority: 85
  },
  {
    id: 'about-004',
    question: '会社情報を教えてください',
    answer: 'WONDERFUL WORLDの会社情報については、現在準備中です。🏢\n\n詳しい会社概要、設立年月日、所在地などの情報は、「お問い合わせ」ページからお問い合わせいただけます。\n\n📧 お気軽にご連絡ください！',
    keywords: ['会社', '会社情報', '企業情報', '設立', '設立年月日', '所在地', '住所', '法人', '運営会社', '運営元'],
    category: 'about',
    priority: 75
  },

  // =================================
  // カテゴリ: モデル
  // =================================
  {
    id: 'models-001',
    question: '所属モデルを教えてください',
    answer: '現在、3名の素敵なAIモデルが活躍中です！✨\n\n👑 **AI Yuna** (@ai_yuna)\n- Grand Prix受賞\n- フォロワー: 150K\n- 専門: Miss Universe, Beauty, Global\n\n🌸 **AI Sakura** (@ai_sakura)\n- Finalist\n- フォロワー: 128K\n- 専門: Miss Planet, Eco, Fashion\n\n🎓 **AI Rina** (@ai_rina)\n- Finalist\n- フォロワー: 112K\n- 専門: Miss University, Education, Leadership\n\n詳しくは「モデル」ページでご確認ください！',
    keywords: ['モデル', '所属', 'メンバー', '誰', 'インフルエンサー', 'AI', 'タレント'],
    category: 'models',
    priority: 95
  },
  {
    id: 'models-002',
    question: 'AI Yunaについて教えてください',
    answer: '**AI Yuna** (@ai_yuna)は当プロジェクトのグランプリ受賞者です！👑\n\n【プロフィール】\n- フォロワー: 150K\n- 受賞: Grand Prix\n- 専門分野: Miss Universe, Beauty, Global\n- 得意: グローバルな美容トレンド、ビューティーコンテンツ\n\nミスユニバース出身の経験を活かし、世界基準の美と発信力で活躍しています✨',
    keywords: ['Yuna', 'ユナ', 'グランプリ', 'Grand Prix', 'ミスユニバース'],
    category: 'models',
    priority: 80
  },
  {
    id: 'models-003',
    question: 'AI Sakuraについて教えてください',
    answer: '**AI Sakura** (@ai_sakura)はエコ・ファッション分野で活躍中です！🌸\n\n【プロフィール】\n- フォロワー: 128K\n- 受賞: Finalist\n- 専門分野: Miss Planet, Eco, Fashion\n- 得意: サステナブルファッション、環境問題\n\nミスプラネット出身で、環境に優しいライフスタイルを提案しています🌍',
    keywords: ['Sakura', 'サクラ', 'さくら', 'ミスプラネット', 'エコ', 'ファッション'],
    category: 'models',
    priority: 80
  },
  {
    id: 'models-004',
    question: 'AI Rinaについて教えてください',
    answer: '**AI Rina** (@ai_rina)は教育・リーダーシップ分野のスペシャリストです！🎓\n\n【プロフィール】\n- フォロワー: 112K\n- 受賞: Finalist\n- 専門分野: Miss University, Education, Leadership\n- 得意: キャリア支援、教育コンテンツ、リーダーシップ\n\nミスユニバーシティ出身で、女性のキャリアアップを応援しています💪',
    keywords: ['Rina', 'リナ', 'りな', 'ミスユニバーシティ', '教育', 'リーダーシップ'],
    category: 'models',
    priority: 80
  },
  {
    id: 'models-005',
    question: 'モデルになるにはどうすればいいですか？',
    answer: 'AIモデルインフルエンサーへの参加に興味を持っていただきありがとうございます！✨\n\n現在、新規モデルの募集については準備中です。\n\n📧 詳しくは「お問い合わせ」ページからご連絡ください。\n📱 最新情報は公式SNSでも発信しています！\n\nあなたの夢を応援します💕',
    keywords: ['モデルになりたい', '応募', '募集', '参加', 'なるには', '登録', 'エントリー'],
    category: 'models',
    priority: 70
  },

  // =================================
  // カテゴリ: プロジェクト
  // =================================
  {
    id: 'projects-001',
    question: 'Best of Miss Tokyo 2025について教えてください',
    answer: '**Best of Miss Tokyo 2025**は、ミスコンテストファイナリストの祭典です！🎉\n\n【概要】\n- 様々なミスコンテストのファイナリストが集結\n- 新たなステージでの活躍をサポート\n- AIモデルインフルエンサーとしてのキャリア構築\n\n詳細は「ニュース」ページの特集記事をご覧ください！',
    keywords: ['Best of Miss Tokyo', 'ベストオブミストーキョー', '2025', 'ミストーキョー', 'イベント'],
    category: 'projects',
    priority: 85
  },
  {
    id: 'projects-002',
    question: 'どんなプロジェクトがありますか？',
    answer: '現在、以下のプロジェクトを展開しています！\n\n🎯 **Best of Miss Tokyo 2025**\nミスコンテストファイナリストの祭典\n\n💼 **AIモデルインフルエンサー育成**\n新しいキャリアの場の提供\n\n🤝 **企業コラボレーション**\nブランドパートナーとの協業\n\n詳しくは「プロジェクト」ページをチェック！',
    keywords: ['プロジェクト', '企画', 'イベント', '活動内容', '取り組み'],
    category: 'projects',
    priority: 75
  },

  // =================================
  // カテゴリ: お問い合わせ・連絡
  // =================================
  {
    id: 'contact-001',
    question: 'お問い合わせ方法を教えてください',
    answer: 'お問い合わせは以下の方法で受け付けています！📧\n\n**1. お問い合わせフォーム**\nサイト内の「お問い合わせ」ページから送信できます\n\n**2. SNS**\n公式Instagram、TikTok、Twitterからもご連絡いただけます\n\n**3. メール**\n詳しくは「お問い合わせ」ページをご確認ください\n\nお気軽にご連絡くださいね！',
    keywords: ['お問い合わせ', '問い合わせ', '連絡', 'コンタクト', 'メール', '質問'],
    category: 'contact',
    priority: 90
  },
  {
    id: 'contact-002',
    question: 'コラボレーションについて相談したいです',
    answer: '企業様とのコラボレーション、大歓迎です！🤝\n\n以下のような連携が可能です：\n- 商品・サービスのプロモーション\n- イベント共催\n- SNSキャンペーン\n- ブランドアンバサダー\n\n「お問い合わせ」ページから、または「パートナー」ページで詳細をご確認ください。\n\nお気軽にご相談ください！',
    keywords: ['コラボ', 'コラボレーション', '企業', 'タイアップ', 'パートナー', '協業', '提携'],
    category: 'contact',
    priority: 85
  },
  {
    id: 'contact-003',
    question: 'SNSアカウントを教えてください',
    answer: '公式SNSアカウントはこちらです！📱\n\n**Instagram**\n最新の活動やモデルの投稿をチェック！\n\n**TikTok**\n楽しい動画コンテンツを配信中！\n\n**Twitter/X**\nニュースやお知らせを随時更新！\n\nフォローしてくださいね✨\n詳しいリンクはサイトフッターにあります！',
    keywords: ['SNS', 'Instagram', 'インスタ', 'TikTok', 'ティックトック', 'Twitter', 'ツイッター', 'フォロー'],
    category: 'contact',
    priority: 75
  },

  // =================================
  // カテゴリ: ナビゲーション・サイト案内
  // =================================
  {
    id: 'nav-001',
    question: 'モデルのページはどこですか？',
    answer: '「モデル」ページは、サイト上部のナビゲーションメニューからアクセスできます！\n\n📍 トップページ → モデル\n\nそこで、AI Yuna、AI Sakura、AI Rinaの詳しいプロフィールや活動をご覧いただけます✨',
    keywords: ['モデルページ', 'どこ', 'ページ', '見る', 'アクセス'],
    category: 'navigation',
    priority: 70
  },
  {
    id: 'nav-002',
    question: 'オンラインストアはありますか？',
    answer: 'はい、オンラインストアがございます！🛍️\n\nサイト上部のナビゲーションメニューから「オンラインストア」をクリックしてください。\n\nWONDERFUL WORLDオリジナルグッズなどをご購入いただけます！',
    keywords: ['オンラインストア', 'ストア', 'ショップ', '購入', '買う', 'グッズ', '商品'],
    category: 'navigation',
    priority: 75
  },
  {
    id: 'nav-003',
    question: 'ニュースはどこで見られますか？',
    answer: '最新ニュースは「ニュース」ページでご覧いただけます！📰\n\n📍 トップページ → ニュース\n\nプロジェクトの最新情報、イベントレポート、モデルの活動などを随時更新しています。\n\nぜひチェックしてくださいね！',
    keywords: ['ニュース', '最新情報', 'お知らせ', '情報', '更新'],
    category: 'navigation',
    priority: 70
  },

  // =================================
  // カテゴリ: 一般的な質問
  // =================================
  {
    id: 'general-001',
    question: 'AIモデルインフルエンサーとは何ですか？',
    answer: 'AIモデルインフルエンサーとは、AI技術を活用した新しいタイプのインフルエンサーです！🤖✨\n\n【特徴】\n- 実在のミスコンテストファイナリストの経験と知識をベースに\n- AI技術でコンテンツ制作を効率化\n- グローバルに24/7活動可能\n- 持続可能なキャリアモデル\n\n従来のインフルエンサー活動の制約を超えた、新しい働き方です！',
    keywords: ['AIモデル', 'AIインフルエンサー', 'とは', 'AI', 'バーチャル'],
    category: 'general',
    priority: 80
  },
  {
    id: 'general-002',
    question: '料金はかかりますか？',
    answer: 'WONDERFUL WORLDのウェブサイトは、どなたでも無料でご覧いただけます！✨\n\nオンラインストアでの商品購入や、一部の有料サービスを除き、基本的なコンテンツは全て無料です。\n\nお気軽に楽しんでくださいね！',
    keywords: ['料金', '費用', '無料', '有料', '価格', 'お金', 'コスト'],
    category: 'general',
    priority: 65
  },
  {
    id: 'general-003',
    question: 'どんな人が対象ですか？',
    answer: 'WONDERFUL WORLDは、こんな方々を応援しています！💕\n\n✅ ミスコンテスト出場経験者\n✅ 新しいキャリアを探している女性\n✅ AIや美容業界に興味がある方\n✅ インフルエンサーとして活躍したい方\n✅ 女性のエンパワーメントに共感する方\n\nもちろん、応援してくださる全ての方も大歓迎です！',
    keywords: ['対象', '誰', 'ターゲット', '応募資格', '参加条件'],
    category: 'general',
    priority: 60
  },

  // =================================
  // 挨拶・その他
  // =================================
  {
    id: 'greeting-001',
    question: 'こんにちは',
    answer: 'こんにちは！✨\n\nWONDERFUL WORLDのバーチャルアシスタント、AIリナです！\n\nWONDERFUL WORLDについて、何でも聞いてくださいね。\n\n例えば...\n- 「WONDERFUL WORLDとは？」\n- 「所属モデルを教えて」\n- 「お問い合わせ方法は？」\n\nなどなど、お気軽にどうぞ！💕',
    keywords: ['こんにちは', 'こんばんは', 'おはよう', 'はじめまして', 'hello', 'hi'],
    category: 'general',
    priority: 50
  },
  {
    id: 'greeting-002',
    question: 'ありがとう',
    answer: 'どういたしまして！😊\n\n他にも何か知りたいことがあれば、いつでも聞いてくださいね！\n\nWONDERFUL WORLDを応援してくれてありがとうございます✨',
    keywords: ['ありがとう', 'ありがとうございます', 'サンキュー', 'thanks'],
    category: 'general',
    priority: 45
  },
  {
    id: 'help-001',
    question: 'ヘルプ',
    answer: 'お手伝いします！💁‍♀️\n\n以下のような質問ができます：\n\n📌 **WONDERFUL WORLDについて**\n「WONDERFUL WORLDとは？」「ミッションは？」\n\n📌 **モデルについて**\n「所属モデルは？」「AI Yunaについて教えて」\n\n📌 **プロジェクト**\n「Best of Miss Tokyo 2025とは？」\n\n📌 **お問い合わせ**\n「連絡方法は？」「コラボしたい」\n\n📌 **サイト案内**\n「モデルページはどこ？」「ストアは？」\n\n気になることを聞いてみてください！',
    keywords: ['ヘルプ', 'help', '使い方', 'できること', '質問例', 'どうやって'],
    category: 'general',
    priority: 55
  },

  // =================================
  // デフォルト（マッチしない場合）
  // =================================
  {
    id: 'default-001',
    question: 'その他の質問',
    answer: '申し訳ございません。その質問についてはまだ十分な情報がありません💦\n\n以下のトピックでしたらお答えできます：\n\n✅ WONDERFUL WORLDについて\n✅ 所属モデル（AI Yuna、Sakura、Rina）\n✅ プロジェクト情報\n✅ お問い合わせ方法\n✅ サイトのナビゲーション\n\nもしくは「お問い合わせ」ページから直接ご質問いただくこともできます！\n\nお気軽にお尋ねくださいね✨',
    keywords: [], // キーワードなし（デフォルト応答）
    category: 'general',
    priority: 0
  }
];

// カテゴリ別のサジェスチョン
export const categorySuggestions = {
  about: [
    'WONDERFUL WORLDとは？',
    'ミッションについて',
    'どんな活動をしていますか？'
  ],
  models: [
    '所属モデルを教えて',
    'AI Yunaについて',
    'モデルになるには？'
  ],
  projects: [
    'Best of Miss Tokyo 2025とは？',
    'どんなプロジェクトがありますか？'
  ],
  contact: [
    'お問い合わせ方法は？',
    'コラボレーションしたい',
    'SNSアカウントは？'
  ],
  navigation: [
    'モデルページはどこ？',
    'オンラインストアは？',
    'ニュースはどこ？'
  ],
  general: [
    'AIモデルインフルエンサーとは？',
    'どんな人が対象ですか？',
    'ヘルプ'
  ]
};

export default chatbotFAQ;
