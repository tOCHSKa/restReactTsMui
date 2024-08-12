// // server/controllers/authController.ts
// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { getUserByEmail, createUser } from '../models/UserModel.tjs';

// const JWT_SECRET = 'votre_secret_pour_jwt';

// export const register = async (req: Request, res: Response) => {
//     const { username, password, email } = req.body;

//     try {
//         getUserByEmail(email, async (error, existingUser) => {
//             if (error) {
//                 res.status(500).json({ message: 'Erreur du serveur', error });
//                 return;
//             }

//             if (existingUser) {
//                 res.status(400).json({ message: 'Email déjà utilisé' });
//                 return;
//             }

//             const hashedPassword = await bcrypt.hash(password, 10);
//             const newUser = { username, password: hashedPassword, email };

//             createUser(newUser, (error, results) => {
//                 if (error) {
//                     res.status(500).json({ message: 'Erreur du serveur', error });
//                     return;
//                 }
//                 res.status(201).json({ message: 'Utilisateur créé avec succès' });
//             });
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur du serveur', error });
//     }
// };

// export const login = async (req: Request, res: Response) => {
//     const { email, password } = req.body;

//     try {
//         getUserByEmail(email, async (error, user) => {
//             if (error) {
//                 res.status(500).json({ message: 'Erreur du serveur', error });
//                 return;
//             }

//             if (!user) {
//                 res.status(400).json({ message: 'Email ou mot de passe incorrect' });
//                 return;
//             }

//             const isPasswordValid = await bcrypt.compare(password, user.password);
//             if (!isPasswordValid) {
//                 res.status(400).json({ message: 'Email ou mot de passe incorrect' });
//                 return;
//             }

//             const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

//             res.json({ message: 'Connexion réussie', token });
//         });
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur du serveur', error });
//     }
// };
