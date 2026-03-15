import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Configure AWS SES
const ses = new SESClient({
  region: 'us-east-1', // e.g., 'us-east-1'
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const params = {
      Source: 'me@ismailmasseran.com',
      Destination: {
        ToAddresses: ['isml.msrn11@gmail.com'],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(params));
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error); // Log error to the console
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}