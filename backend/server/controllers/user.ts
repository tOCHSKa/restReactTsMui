// // server/controllers/userController.ts
// import { Request, Response } from 'express';
// import { deleteUserById, getUserById, updateUserById } from '../models/UserModel';

// export const getUser = (req: Request, res: Response) => {
//     const userId = req.params.id;

//     getUserById(userId, (error, results) => {
//         if (error) {
//             res.status(500).json({ message: 'Erreur du serveur' });
//             return;
//         }
//         if (results.length > 0) {
//             res.json(results[0]);
//         } else {
//             res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//     });
// };

// export const updateUser = (req: Request, res: Response) => {
//     const userId = req.params.id;
//     const updateData = req.body;

//     updateUserById(userId, updateData, (error, results) => {
//         if (error) {
//             res.status(500).json({ message: 'Erreur du serveur' });
//             return;
//         }
//         if (results.affectedRows > 0) {
//             res.json({ message: 'Utilisateur mis à jour' });
//         } else {
//             res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//     });
// };

// export const deleteUser = (req: Request, res: Response) => {
//     const userId = req.params.id;

//     deleteUserById(userId, (error, results) => {
//         if (error) {
//             res.status(500).json({ message: 'Erreur du serveyr' });
//             return;
//         }
//         if (results.affectedRows > 0) {
//             res.json({ message: 'Utilisateur supprimé' });
//         } else {
//             res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//     });
// };