// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  const user = process.env.BASIC_USER;
  const pass = process.env.BASIC_PASS;

  // If env vars are missing, fail closed (block everything)
  if (!user || !pass) {
    return new NextResponse("Auth not configured", { status: 500 });
  }

  // If no Authorization header → ask for Basic Auth
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  // Parse credentials from header
  const base64Credentials = authHeader.split(" ")[1] ?? "";
  let decoded: string;

  try {
    decoded = atob(base64Credentials);
  } catch {
    return unauthorizedResponse();
  }

  const [providedUser, providedPass] = decoded.split(":");

  // Check against env variables
  if (providedUser === user && providedPass === pass) {
    // Correct creds → allow request to continue to any route
    return NextResponse.next();
  }

  // Wrong creds → ask again
  return unauthorizedResponse();
}

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      // This tells the browser to show the login popup
      "WWW-Authenticate": 'Basic realm="Protected"',
    },
  });
}

// Run for ALL routes
export const config = {
  matcher: "/:path*",
};
