import { verifyCredentials } from 'sanity-auth';

export default async function sanityProvider(req, res) {
  const { email, password } = await req.body;

  try {
    // Verify the user's credentials using Sanity's authentication API
    const user = await verifyCredentials(email, password);

    // If authentication is successful, return the user object
    return Promise.resolve(user);
  } catch (error) {
    // If authentication fails, return null
    return Promise.resolve(null);
  }
}
