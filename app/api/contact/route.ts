import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Insert data into contacts table
    await query(
      "INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)",
      [name, email, phone, subject, message]
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
