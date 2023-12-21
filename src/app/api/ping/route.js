import { NextResponse } from "next/server";

import { connectDB } from "@/utils/mongo";

export function GET() {
  connectDB();
  return NextResponse.json({
    message: "hola",
  });
}
