import crypto from 'crypto';

export const SESSION_SECRET_KEY = crypto
  .createHmac('sha256', crypto.randomBytes(16).toString('hex'))
  .update(crypto.randomBytes(16).toString('hex'))
  .digest('hex');
