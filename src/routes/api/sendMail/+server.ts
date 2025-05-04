import { RESEND_API_KEY } from '$env/static/private';

export async function POST({ request }) {
  const { to, subject, text } = await request.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboard@resend.dev',
      to,
      subject,
      text
    })
  });

  const data = await res.json();

  if (res.ok) {
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ success: false, error: data }), { status: res.status });
  }
}
