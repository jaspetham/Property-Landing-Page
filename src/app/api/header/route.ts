// src/app/api/header/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const filePath = path.join(process.cwd(), "public","json", "Header.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return NextResponse.json(data);
}
