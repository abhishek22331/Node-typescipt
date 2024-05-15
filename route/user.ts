// route/user.ts

import express from 'express';
import { authenticateUser } from '../controllers/user.ts';

const router = express.Router();

// Route for user authentication
router.post('/login', authenticateUser);

export default router;
