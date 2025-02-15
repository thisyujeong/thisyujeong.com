import { ContactType } from '@/app/api/contact/route';

export async function sendContactEmail(emailForm: ContactType) {
  const fetchUrl = process.env.NEXT_PUBLIC_API_URL + '/api/contact';
  const response = await fetch(fetchUrl, {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }

  return data;
}
