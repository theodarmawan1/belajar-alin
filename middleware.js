/**
 * Vercel Edge Middleware for Session-Based Authentication.
 * Intercepts requests and checks if the 'auth_session' cookie is present and matches the hash of process.env.AUTH_USER and process.env.AUTH_PASS.
 * Redirects anonymous users to /login.html.
 */

export const config = {
  // Apply to all routes except API and static assets
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|json|woff2|woff|ttf)).*)',
  ],
};

export default function middleware(req) {
  const url = new URL(req.url);
  const cookies = req.headers.get('cookie') || '';
  
  // Extract auth_session cookie
  const sessionToken = cookies
    .split('; ')
    .find(row => row.startsWith('auth_session='))
    ?.split('=')[1];

  let authenticated = false;

  const expectedUser = process.env.AUTH_USER;
  const expectedPass = process.env.AUTH_PASS;

  if (sessionToken && expectedUser && expectedPass) {
    try {
      const decoded = atob(sessionToken);
      const [user, pwd] = decoded.split(':');

      if (user === expectedUser && pwd === expectedPass) {
        authenticated = true;
      }
    } catch (e) {
      console.error('Session token verification failed:', e);
    }
  }

  const pathname = url.pathname;

  // If user is not authenticated and is requesting a protected route, redirect to /login.html
  if (!authenticated && pathname !== '/login.html') {
    url.pathname = '/login.html';
    return Response.redirect(url, 307);
  }

  // If user is already authenticated and tries to visit /login.html, redirect back to home /
  if (authenticated && pathname === '/login.html') {
    url.pathname = '/';
    return Response.redirect(url, 307);
  }
}
