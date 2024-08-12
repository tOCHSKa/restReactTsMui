// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mysql from 'mysql2/promise';

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'nextjs'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//     console.log('Connected to database.');
// });

// // Définir la route principale pour récupérer les utilisateurs
// app.get('/users', (req, res) => {
//     const sql = 'SELECT * FROM user';
//     db.query(sql, (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.json(results); // Renvoie un tableau d'utilisateurs
//     });
// });

// // app.post('/login', (req, res) => {
// //     const { email, password } = req.body;

// //     // Vérifiez si l'utilisateur existe déjà
// //     const sqlSelect = 'SELECT * FROM user WHERE email = ?';
// //     db.query(sqlSelect, [email], (err, results) => {
// //         if (err) {
// //             return res.status(500).json({ error: err.message });
// //         }

// //         if (results.length > 0) {
// //             // Si un utilisateur avec cet email existe déjà, retournez une erreur
// //             return res.status(400).json({ error: 'Email already exists' });
// //         } else {
// //             // Sinon, insérez le nouvel utilisateur dans la base de données
// //             const sqlInsert = 'INSERT INTO user (email, password) VALUES (?, ?)';
// //             db.query(sqlInsert, [email, password], (err, results) => {
// //                 if (err) {
// //                     return res.status(500).json({ error: err.message });
// //                 }
// //                 return res.status(201).json({ message: 'User registered successfully' });
// //             });
// //         }
// //     });
// // });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // Requête pour sélectionner l'utilisateur avec l'email fourni
//     const sqlSelect = 'SELECT * FROM user WHERE email = ?';
//     db.query(sqlSelect, [email], (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Internal server error' });
//         }

//         if (results.length === 0) {
//             // Si aucun utilisateur n'est trouvé avec cet email, retournez une erreur
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         const user = results[0];

//         // Vérification du mot de passe (assurez-vous que le mot de passe est correctement hashé)
//         if (user.password === password) {  // Remplacez cette ligne par une comparaison sécurisée si les mots de passe sont hashés
//             // Authentification réussie
//             return res.status(200).json({ message: 'Login successful' });
//         } else {
//             // Le mot de passe est incorrect
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }
//     });
// });



// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
