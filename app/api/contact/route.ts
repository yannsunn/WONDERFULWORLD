import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  agree: boolean;
}

export async function POST(request: NextRequest) {
  try {
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
