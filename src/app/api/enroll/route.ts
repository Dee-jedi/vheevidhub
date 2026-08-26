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
      return NextResponse.json({ success: true, message: 'Enrollment captured (simulated)' });
    }

    let groupId = '';
    if (courseId === 'graphic-design') {
      groupId = '196067969476855624'; // Academy — Logo & Brand Identity Design Students
    } else if (courseId === 'automations') {
      groupId = '196067944730461934'; // Academy — AI Automation Students
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        fields: {
          name: firstName,
          course_selected: courseId === 'graphic-design' ? 'Logo & brand Identity Design' : (courseId === 'automations' ? 'AI Automation' : courseId),
          payment_status: 'paid',
          enrollment_status: 'Enrolled'
        },
        groups: groupId ? [groupId] : []
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerLite API error:', errorText);
      // We still return success so the user flow isn't blocked
      return NextResponse.json({ success: true, message: 'Enrollment captured but MailerLite failed' });
    }

    return NextResponse.json({ success: true, message: 'Enrollment captured to MailerLite successfully' });
  } catch (error) {
    console.error('Enrollment capture error:', error);
    // Don't block flow if enrollment capture fails
    return NextResponse.json({ success: true, error: 'Internal server error' });
  }
}
