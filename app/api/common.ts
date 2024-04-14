import { NextRequest, NextResponse } from "next/server";

export const HUGGINGFACE_URL = "api.huggingface.co";
const DEFAULT_PROTOCOL = "https";
const PROTOCOL = process.env.PROTOCOL ?? DEFAULT_PROTOCOL;
const BASE_URL = process.env.BASE_URL ?? HUGGINGFACE_URL;

export async function handleHuggingFaceRequest(req: NextRequest): Promise<NextResponse> {
  const controller = new AbortController();
  const authValue = req.headers.get("Authorization") ?? "";
  const huggingFacePath = req.nextUrl.pathname.replace("/api/huggingface/", "");

  let baseUrl = BASE_URL;
  if (!baseUrl.startsWith("http")) {
    baseUrl = `${PROTOCOL}://${baseUrl}`;
  }

  console.log("[Proxy] ", huggingFacePath);
  console.log("[Base URL]", baseUrl);

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 10 * 60 * 1000);

  const fetchUrl = `${baseUrl}/${huggingFacePath}`;
  const fetchOptions: RequestInit = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: authValue,
    },
    body: req.body,
    signal: controller.signal,
  };

  try {
    const res = await fetch(fetchUrl, fetchOptions);

    // Handle 401 Unauthorized to prevent browser prompt for credentials
    if (res.status === 401) {
      const newHeaders = new Headers(res.headers);
      newHeaders.delete("www-authenticate");
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: newHeaders,
      });
    }

    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}
