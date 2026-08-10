import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { firstName, email, courseId } = await req.json();

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // MailerLite Integration
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    if (!MAILERLITE_API_KEY) {
      console.warn('MailerLite API key is missing. Skipping email capture.');
      return NextResponse.json({ success: true, message: 'Lead captured (simulated)' });
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        fields: {
          name: firstName,
        },
        groups: ['195426778472253245'] // "Academy Leads" Group ID
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerLite API error:', errorText);
      // We still return success so the checkout flow isn't blocked
      return NextResponse.json({ success: true, message: 'Lead captured but MailerLite failed' });
    }

    return NextResponse.json({ success: true, message: 'Lead captured to MailerLite successfully' });
  } catch (error) {
    console.error('Lead capture error:', error);
    // Don't block checkout if lead capture fails
    return NextResponse.json({ success: true, error: 'Internal server error' });
  }
}
