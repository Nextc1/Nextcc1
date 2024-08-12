
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = req.query;

  // Store the access token in localStorage or a secure cookie
  if (typeof access_token === 'string') {
    // Example: Store the token in a cookie (requires additional setup)
    res.setHeader('Set-Cookie', `access_token=${access_token}; Path=/; HttpOnly; Secure`);
    // Redirect the user to the desired page
    res.redirect('/kyc');
  } else {
    res.status(400).json({ error: 'Access token not provided' });
  }
}
