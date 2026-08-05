import { NextResponse } from "next/server";
import axios from "axios";
import sanitizer from "sanitizer";

export async function POST(request: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const emailApi = process.env.EMAIL_API_URL as string;
  const emailApiToken = process.env.EMAIL_API_TOKEN;

  const postData = await request.json();
  const { gRecaptchaToken, firstName, lastName, businessEmail, companyName } =
    postData;

  let res: any;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch {}

  if (res && res.data?.success && res.data?.score > 0.5) {
    const response = await axios.post(
      emailApi,
      {
        firstName: sanitizer.sanitize(sanitizer.escape(firstName)),
        lastName: sanitizer.sanitize(sanitizer.escape(lastName)),
        businessEmail: sanitizer.sanitize(sanitizer.escape(businessEmail)),
        companyName: sanitizer.sanitize(sanitizer.escape(companyName)),
      },
      { headers: { Authorization: `Bearer ${emailApiToken}` } }
    );
    if (response.status === 200) {
      return NextResponse.json({
        success: true,
      });
    }
  }
  return NextResponse.json({
    success: false,
  });
}
