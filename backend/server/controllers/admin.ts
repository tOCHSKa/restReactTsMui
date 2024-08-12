import express from 'express';
import { getUser, updateUser, deleteUser } from './user';

const router = express.Router();

// Route pour obtenir un utilisateur
router.get('/users/:id', getUser);

// Route pour mettre à jour un utilisateur
router.put('/users/:id', updateUser);

// Route pour supprimer un utilisateur
router.delete('/users/:id', deleteUser);

export default router;
