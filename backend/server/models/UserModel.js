// server/models/UserModel.ts
import connectToDB from '../db';

// Fonction pour créer un nouvel utilisateur
export const createUser = async (userData) => {
    const query = 'INSERT INTO users SET ?';

    try {
        const connection = await connectToDB(); // Attendre la connexion
        if (!connection) {
            throw new Error('Database connection not established');
        }

        const [results] = await connection.query(query, userData);

        return { id: (results).insertId, ...userData };
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Gérer l'erreur
    }
};

// Fonction pour obtenir un utilisateur par ID
export const getUserById = async (userId, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';

    try {
        const connection = await connectToDB(); // Attendre la connexion
        if (!connection) {
            throw new Error('Database connection not established');
        }

        const [rows] = await connection.query(query, [userId]);

        if (rows.length > 0) {
            callback(null, rows[0]); // Renvoie le premier utilisateur trouvé
        } else {
            callback(null, { message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        callback(error, null); // Passer l'erreur au callback
    }
};

// Fonction pour mettre à jour un utilisateur par ID
export const updateUserById = async (userId, updateData, callback) => {
    const query = 'UPDATE users SET ? WHERE id = ?';

    try {
        const connection = await connectToDb(); // Attendre la connexion
        if (!connection) {
            throw new Error('Database connection not established');
        }

        // Effectuer la requête de mise à jour
        const [result] = await connection.query(query, [updateData, userId]);

        if (result.affectedRows > 0) {
            callback(null, { message: 'Utilisateur mis à jour' });
        } else {
            callback(null, { message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        callback(error, null); // Passer l'erreur au callback
    }
};


// // Fonction pour supprimer un utilisateur par ID
// export const deleteUserById = (userId: string, callback: (error: MysqlError | null, results?: any) => void) => {
//     const query = 'DELETE FROM users WHERE id = ?';

//     connection.query(query, [userId], (error, results) => {
//         if (error) {
//             callback(error);
//             return;
//         }
//         if (results.affectedRows > 0) {
//             callback(null, { message: 'Utilisateur supprimé avec succès' });
//         } else {
//             callback(null, { message: 'Utilisateur non trouvé' });
//         }
//     });
// };


// export const getUserByEmail = (email: string, callback: (error: MysqlError | null, results?: any) => void) => {
//     const query = 'SELECT * FROM users WHERE email = ?';

//     connection.query(query, [email], (error, results) => {
//         if (error) {
//             callback(error);
//             return;
//         }
//         if (results.length > 0) {
//             callback(null, results[0]); // Renvoie l'utilisateur trouvé
//         } else {
//             callback(null, null); // Aucun utilisateur trouvé
//         }
//     });
// };

