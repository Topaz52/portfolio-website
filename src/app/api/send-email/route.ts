import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';

// Configure AWS SES
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1', // e.g., 'us-east-1'
});

const ses = new AWS.SES();

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const params = {
      Source: 'me@ismailmasseran.com', // Replace with an email address in your verified domain
      Destination: {
        ToAddresses: ['isml.msrn11@gmail.com'], // Replace with your email address
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

    await ses.sendEmail(params).promise();
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error); // Log error to the console
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}