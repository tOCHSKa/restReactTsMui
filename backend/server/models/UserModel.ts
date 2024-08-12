// server/models/UserModel.ts
import { MysqlError, Connection } from 'mysql';
import connectToDB from '../db';

const connection: Connection = connectToDB(); // Utiliser la connexion existante

// Fonction pour créer un nouvel utilisateur
export const createUser = (userData: any, callback: (error: MysqlError | null, results?: any) => void) => {
    const query = 'INSERT INTO users SET ?';

    connection.query(query, userData, (error, results) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null, { id: results.insertId, ...userData });
    });
};

// Fonction pour obtenir un utilisateur par ID
export const getUserById = (userId: string, callback: (error: MysqlError | null, results?: any) => void) => {
    const query = 'SELECT * FROM users WHERE id = ?';

    connection.query(query, [userId], (error, results) => {
        if (error) {
            callback(error);
            return;
        }
        if (results.length > 0) {
            callback(null, results[0]);
        } else {
            callback(null, { message: 'Utilisateur non trouvé' });
        }
    });
};

// Fonction pour mettre à jour un utilisateur par ID
export const updateUserById = (userId: string, updateData: any, callback: (error: MysqlError | null, results?: any) => void) => {
    const query = 'UPDATE users SET ? WHERE id = ?';

    connection.query(query, [updateData, userId], (error, results) => {
        if (error) {
            callback(error);
            return;
        }
        if (results.affectedRows > 0) {
            callback(null, { message: 'Utilisateur mis à jour' });
        } else {
            callback(null, { message: 'Utilisateur non trouvé' });
        }
    });
};

// Fonction pour supprimer un utilisateur par ID
export const deleteUserById = (userId: string, callback: (error: MysqlError | null, results?: any) => void) => {
    const query = 'DELETE FROM users WHERE id = ?';

    connection.query(query, [userId], (error, results) => {
        if (error) {
            callback(error);
            return;
        }
        if (results.affectedRows > 0) {
            callback(null, { message: 'Utilisateur supprimé avec succès' });
        } else {
            callback(null, { message: 'Utilisateur non trouvé' });
        }
    });
};


export const getUserByEmail = (email: string, callback: (error: MysqlError | null, results?: any) => void) => {
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], (error, results) => {
        if (error) {
            callback(error);
            return;
        }
        if (results.length > 0) {
            callback(null, results[0]); // Renvoie l'utilisateur trouvé
        } else {
            callback(null, null); // Aucun utilisateur trouvé
        }
    });
};

