/**
 * Vercel Edge Middleware for Basic Auth.
 * This middleware intercepts requests and checks for credentials in the Authorization header.
 * It compares the credentials with process.env.AUTH_USER and process.env.AUTH_PASS.
 * If authentication fails or is missing, it returns a 401 response with the WWW-Authenticate header.
 */

// Edge middleware config to specify which routes should be matched/processed
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (search engine crawler configuration)
     * - Static asset extensions (.css, .js, .png, .jpg, .jpeg, .gif, .svg, .ico, .json, .woff2, .woff, .ttf)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|json|woff2|woff|ttf)).*)',
  ],
};

export default function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      const expectedUser = process.env.AUTH_USER;
      const expectedPass = process.env.AUTH_PASS;

      // Only authorize if both environment variables are set and match
      if (expectedUser && expectedPass && user === expectedUser && pwd === expectedPass) {
        // Continue to the requested page (return undefined/nothing)
        return;
      }
    } catch (e) {
      console.error('Basic Auth decoding error:', e);
    }
  }

  // Return a 401 Unauthorized response to trigger browser's native login modal
  return new Response('Access Denied. Authentication Required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Restricted Access"',
      'Content-Type': 'text/plain',
    },
  });
}
