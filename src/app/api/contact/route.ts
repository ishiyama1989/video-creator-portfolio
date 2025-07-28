import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    
    // バリデーション
    const { name, email, projectType, message } = body;
    
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { message: '必須項目を入力してください。' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      );
    }

    // 実際のメール送信処理（ここではログ出力のみ）
    console.log('新しいお問い合わせを受信しました:', {
      name,
      email,
      projectType,
      budget: body.budget || '未指定',
      message,
      timestamp: new Date().toISOString(),
    });

    // 実際のプロダクションでは、ここでメール送信サービス（SendGrid、Nodemailer等）を使用
    // 例: SendGridを使用する場合
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com',
      from: 'noreply@yourdomain.com',
      subject: `新しいお問い合わせ: ${projectType}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>プロジェクト種別:</strong> ${projectType}</p>
        <p><strong>予算:</strong> ${body.budget || '未指定'}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    // 自動返信メール（実際のプロダクションで実装）
    /*
    const autoReplyMsg = {
      to: email,
      from: 'noreply@yourdomain.com',
      subject: 'お問い合わせありがとうございます',
      html: `
        <p>${name}様</p>
        <p>この度は、お問い合わせいただき誠にありがとうございます。</p>
        <p>内容を確認の上、2営業日以内にご返信させていただきます。</p>
        <p>お急ぎの場合は、お電話にてお問い合わせください。</p>
        <br>
        <p>映像クリエイター<br>
        TEL: 090-1234-5678<br>
        Email: contact@example.com</p>
      `,
    };
    
    await sgMail.send(autoReplyMsg);
    */

    return NextResponse.json(
      { 
        message: 'お問い合わせを承りました。2営業日以内にご返信いたします。',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。後でもう一度お試しください。' },
      { status: 500 }
    );
  }
}

// GETリクエストは許可しない
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}