import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/authConfig';

export default async (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader) {
    return res.status(400).json({ error: 'Token not found' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
  } catch (error) {
    return res.status(400).json({ error: 'Token invalid' });
  }

  return next();
};
