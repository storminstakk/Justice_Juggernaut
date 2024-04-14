import { prettyObject } from "@/app/utils/format";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth";
import { requestHuggingface } from "../../common"; // Update import to use Hugging Face

async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  console.log("[Hugging Face Route] params ", params);

  const authResult = auth(req);
  if (authResult.error) {
    return NextResponse.json(authResult, {
      status: 401,
    });
  }

  try {
    return await requestHuggingface(req); // Use Hugging Face request function
  } catch (e) {
    console.error("[Hugging Face] ", e);
    return NextResponse.json(prettyObject(e));
  }
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
