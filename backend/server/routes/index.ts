// server/routes/index.ts

import { Router } from 'express';
import user from './user';
import auth from './auth';
import admin from './admin';

const router = Router();

// Utiliser les routes définies
router.use('/users', user);
router.use('/auth', auth);
router.use('/admin', admin);

export default router;
