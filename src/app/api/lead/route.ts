import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, state, course } = body;

    // Initialize Google Auth using environment variables for security
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // Ensure private key handles literal newlines if passed via certain CI/CD environments
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // The Spreadsheet ID from the URL you provided
    const spreadsheetId = '1ezqBCHmSxlgGwZOu9JufIcDXXiyj3C74P6oVyTv4bIU';
    const range = 'Sheet1!A:F'; // Assumes data goes in Sheet1. Appends to columns A-F.

    // Prepare the timestamp
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, phone, email, state, course]],
      },
    });

    console.log("Lead successfully saved to Google Sheets:", body);

    return NextResponse.json({ success: true, message: "Lead saved successfully." }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to submit lead to Google Sheets:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Internal Server Error", 
      details: error.message 
    }, { status: 500 });
  }
}
