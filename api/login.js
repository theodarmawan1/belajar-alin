/**
 * Vercel Serverless Function to handle custom login POST request.
 * Compares credentials with AUTH_USER and AUTH_PASS environment variables.
 * Sets a secure cookie containing a base64-encoded credential string.
 */

module.exports = async (req, res) => {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  const expectedUser = process.env.AUTH_USER;
  const expectedPass = process.env.AUTH_PASS;

  // Verify that the environment variables are configured
  if (!expectedUser || !expectedPass) {
    return res.status(500).json({ message: 'Server configuration error: Credentials not set.' });
  }

  if (username === expectedUser && password === expectedPass) {
    // Generate session token (base64 of username:password)
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    
    // Set cookie headers: HttpOnly, Secure, SameSite=Strict
    res.setHeader('Set-Cookie', `auth_session=${token}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Strict`);
    
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Username atau password salah!' });
  }
};
