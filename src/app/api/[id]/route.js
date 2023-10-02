import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse.json(post, { status: 200 });
  } catch (error) {
    return new NextResponse.json(error, { status: 400 });
  }
}
