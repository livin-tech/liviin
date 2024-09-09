import { NextFunction, Request, Response } from 'express';
import admin from '../config/firebase';

export const verifyToken = async (req: Request & { user?: any }, res: Response, next: NextFunction): Promise<void> => {
  const idToken = req.cookies.access_token;

  if (!idToken) {
    res.status(403).json({ error: 'No token provided' });
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach the decoded token to the request
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(403).json({ error: 'Unauthorized' });
  }
};