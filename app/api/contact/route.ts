import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { env } from '@/lib/env';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  agree: boolean;
}

// CSRF保護: 許可されたオリジンのリスト
const KNOWN_ORIGINS = [
  'https://wonderfulworld.jp',
  'https://www.wonderfulworld.jp',
  'https://wonderful-world.com',
  'https://www.wonderful-world.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const dynamicOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
];

const envOrigins = env.ALLOWED_ORIGINS ?? [];

const normalizeOrigin = (origin?: string | null) => {
  if (!origin) return null;
  try {
    return new URL(origin).origin;
  } catch {
    return null;
  }
};

const ALLOWED_ORIGINS = Array.from(
  new Set(
    [...KNOWN_ORIGINS, ...dynamicOrigins, ...envOrigins]
      .map(normalizeOrigin)
      .filter((origin): origin is string => Boolean(origin))
  )
);

export async function POST(request: NextRequest) {
  try {
    // CSRF保護: Origin/Refererヘッダーのチェック
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');

    // OriginまたはRefererヘッダーが存在しない場合は拒否
    if (!origin && !referer) {
      return NextResponse.json(
        { error: 'Invalid request - missing origin' },
        { status: 403 }
      );
    }

    // リクエスト元のオリジンを取得
    const requestOrigin = normalizeOrigin(origin) || normalizeOrigin(referer);

    // 許可されたオリジンからのリクエストかチェック
    if (!requestOrigin || !ALLOWED_ORIGINS.includes(requestOrigin)) {
      console.warn('Blocked request from unauthorized origin:', requestOrigin);
      return NextResponse.json(
        { error: 'Forbidden - invalid origin' },
        { status: 403 }
      );
    }

    // レート制限: IPアドレスごとに1分間に5回まで
    const ip = getClientIp(request);
    const rateLimitResult = rateLimit(`contact:${ip}`, {
      maxRequests: 5,
      windowMs: 60000 // 1分
    });

    if (!rateLimitResult.success) {
      const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      console.warn('Rate limit exceeded for contact form:', ip);
      return NextResponse.json(
        {
          error: 'リクエストが多すぎます。しばらくしてから再度お試しください。',
          retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(rateLimitResult.resetTime / 1000))
          }
        }
      );
    }

    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    if (!body.agree) {
      return NextResponse.json(
        { error: 'プライバシーポリシーに同意してください' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // TODO: メール送信処理の実装
    // 以下のサービスのいずれかを使用:
    // 1. Resend (https://resend.com) - 推奨
    // 2. SendGrid (https://sendgrid.com)
    // 3. AWS SES (https://aws.amazon.com/ses/)
    // 4. Nodemailer + Gmail SMTP

    // 例: Resendを使用する場合
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'WONDERFUL WORLD <noreply@wonderfulworld.jp>',
    //   to: 'info@wonderfulworld.jp',
    //   replyTo: body.email,
    //   subject: `【お問い合わせ】${body.subject}`,
    //   html: `
    //     <h2>新しいお問い合わせがあります</h2>
    //     <p><strong>お名前:</strong> ${body.name}</p>
    //     <p><strong>メールアドレス:</strong> ${body.email}</p>
    //     <p><strong>件名:</strong> ${body.subject}</p>
    //     <p><strong>メッセージ:</strong></p>
    //     <p>${body.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    // 開発環境ではコンソールにログ出力
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        timestamp: new Date().toISOString(),
      });
    }

    // 本番環境でも最低限ログを保存（後で確認できるように）
    // TODO: データベースやログ管理サービスに保存
    // await saveContactSubmission(body);

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: '送信に失敗しました。しばらくしてから再度お試しください。',
      },
      { status: 500 }
    );
  }
}
