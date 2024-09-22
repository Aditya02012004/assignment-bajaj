import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { data, file_b64 } = await request.json();

    // Process data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets
      .filter(char => char.toLowerCase() === char)
      .sort((a, b) => b.localeCompare(a))[0] || [];

    // Process file
    let fileValid = false;
    let fileMimeType = '';
    let fileSizeKb = 0;

    if (file_b64) {
      // Implement file processing logic here
      fileValid = true;
      fileMimeType = 'image/png'; // Example, replace with actual logic
      fileSizeKb = 400; // Example, replace with actual logic
    }

    const response = {
      is_success: true,
      user_id: "aditya_raj_singh_02012004", // Replace with actual user_id logic
      email: "as8422@srmist.edu.in", // Replace with actual email
      roll_number: "RA2111026030162", // Replace with actual roll number
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
      file_valid: fileValid,
      file_mime_type: fileMimeType,
      file_size_kb: fileSizeKb.toString()
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ is_success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ operation_code: 1 });
}