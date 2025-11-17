import { NextResponse } from "next/server";
import { BASE } from "@/app/lib/services/posts.service";
import { addMemoryPost, memoryPosts } from "../fake-db";

export async function GET() {
  const realPosts = await fetch(`${BASE}/posts`).then(r => r.json());

  const merged = [...memoryPosts, ...realPosts];

  return NextResponse.json(merged);
}

export async function POST(req: Request) {
  const body = await req.json();

  const result = await fetch(`${BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(r => r.json());

  addMemoryPost({
    ...result,
    ...body,
    id: result.id ?? Date.now()
  });

  return NextResponse.json(result);
}
