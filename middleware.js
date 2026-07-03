/**
 * Vercel Edge Middleware for Session-Based Authentication.
 * This middleware follows the exact specifications of the implementation plan:
 * 1. Bypasses authentication for "/login.html" and "/favicon.ico".
 * 2. Intercepts POST requests to "/login" to validate credentials, write the "session" cookie, and redirect.
 * 3. Redirects unauthenticated users to "/login.html" with a 307 status.
 * 4. Redirects authenticated users away from "/login.html" back to "/".
 */

export const config = {
  // Apply to all routes except API and static assets
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|json|woff2|woff|ttf)).*)',
  ],
};

export default async function middleware(req) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  const expectedUser = process.env.AUTH_USER;
  const expectedPass = process.env.AUTH_PASS;

  // 1. Bypass authentication for "/login.html" and "/favicon.ico"
  if (pathname === '/login.html' || pathname === '/favicon.ico') {
    // If authenticated user tries to access "/login.html", redirect them to "/"
    const cookies = req.headers.get('cookie') || '';
    const sessionToken = cookies
      .split('; ')
      .find(row => row.startsWith('session='))
      ?.split('=')[1];

    if (sessionToken && expectedUser && expectedPass) {
      try {
        const decoded = atob(sessionToken);
        const [user, pwd] = decoded.split(':');
        if (user === expectedUser && pwd === expectedPass) {
          url.pathname = '/';
          return Response.redirect(url, 307);
        }
      } catch (e) {
        // Ignore invalid cookies for login page bypass
      }
    }
    return;
  }

  // 2. Intercept POST requests to "/login" to validate credentials
  if (req.method === 'POST' && pathname === '/login') {
    try {
      const formData = await req.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      if (expectedUser && expectedPass && username === expectedUser && password === expectedPass) {
        // Successful login: Set secure "session" cookie (HttpOnly, Secure, SameSite=Strict, 30 days max-age)
        const token = btoa(`${username}:${password}`);
        
        url.pathname = '/';
        const response = Response.redirect(url, 307);
        response.headers.set(
          'Set-Cookie',
          `session=${token}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Strict`
        );
        return response;
      }
    } catch (e) {
      console.error('Login form parsing error:', e);
    }

    // Failed login: Redirect to "/login.html?error=1"
    url.pathname = '/login.html';
    url.searchParams.set('error', '1');
    return Response.redirect(url, 307);
  }

  // 3. Verify if the "session" cookie is present and valid
  const cookies = req.headers.get('cookie') || '';
  const sessionToken = cookies
    .split('; ')
    .find(row => row.startsWith('session='))
    ?.split('=')[1];

  let authenticated = false;
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

  // 4. Redirect unauthenticated users to "/login.html"
  if (!authenticated) {
    url.pathname = '/login.html';
    return Response.redirect(url, 307);
  }
}
