import { NextResponse } from "next/server";

import { connectDB } from "../ping/route";

export function GET() {
  connectDB();
  return NextResponse.json({
    message: "hola",
  });
}
