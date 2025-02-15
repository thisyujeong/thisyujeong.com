import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export type ContactType = {
  from: string;
  title: string;
  content: string;
};

export type MailOptionType = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_APP_GOOGLE_EMAIL,
    pass: process.env.NEXT_APP_GOOGLE_APP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { from, title, content } = await req.json();

    const mailOptions: MailOptionType = {
      to: process.env.NEXT_APP_GOOGLE_EMAIL || '',
      from,
      subject: `[문의] ${title}`,
      html: `
      <h1>${title}</h1>
      <div>${content}</div>
      </br>
      <p>보낸사람: ${from}</p>
      `,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log(response);

    return NextResponse.json(
      { message: '이메일 전송 성공', result: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json(
      { error: '이메일 전송 실패', result: false },
      { status: 500 }
    );
  }
}
