import { NextRequest, NextResponse } from "next/server";
import md5 from "spark-md5";
import { getServerSideConfig } from "../config/server";
import { ACCESS_CODE_PREFIX } from "../constant";

function getIP(req: NextRequest) {
  let ip = req.ip ?? req.headers.get("x-real-ip");
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "";
  }

  return ip;
}

function parseAuthToken(authToken: string) {
  const token = authToken.trim().replaceAll("Bearer ", "").trim();
  const isOpenAiKey = !token.startsWith(ACCESS_CODE_PREFIX);

  return {
    accessCode: isOpenAiKey ? "" : token.slice(ACCESS_CODE_PREFIX.length),
    apiKey: isOpenAiKey ? token : "",
  };
}

export function handleAuthRequest(
  req: NextRequest,
  params: { path: string[] }
): NextResponse {
  const { path } = params;
  console.log(`[Auth] Handling request for path: ${path}`);

  const authToken = req.headers.get("Authorization") ?? "";
  const { accessCode, apiKey } = parseAuthToken(authToken);

  const hashedCode = md5.hash(accessCode ?? "").trim();
  const serverConfig = getServerSideConfig();

  console.log("[Auth] Allowed hashed codes: ", [...serverConfig.codes]);
  console.log("[Auth] Received access code:", accessCode);
  console.log("[Auth] Hashed access code:", hashedCode);
  console.log("[User IP] ", getIP(req));
  console.log("[Time] ", new Date().toLocaleString());

  if (serverConfig.needCode && !serverConfig.codes.has(hashedCode) && !apiKey) {
    return new NextResponse(
      JSON.stringify({ error: true, msg: !accessCode ? "Empty access code" : "Wrong access code" }),
      { status: 401 }
    );
  }

  // Inject system API key if user does not provide one
  if (!apiKey) {
    const systemApiKey = serverConfig.apiKey;
    if (systemApiKey) {
      console.log("[Auth] Using system API key");
      req.headers.set("Authorization", `Bearer ${systemApiKey}`);
    } else {
      console.log("[Auth] Admin did not provide an API key");
    }
  } else {
    console.log("[Auth] Using user API key");
  }

  return new NextResponse(JSON.stringify({ error: false }));
}
