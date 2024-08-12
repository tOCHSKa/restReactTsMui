// server/server.ts
import connectToDB from './db'
import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import routes from './routes';  // Import des routes
import admin from './routes/admin';
import auth from './routes/auth';

const app = express();
const port = 5000;

connectToDB();

console.log('Connecté à la base de données MySQL');

app.use(bodyParser.json());
// app.use(cors());

app.use('/api/auth', auth);
app.use('/api/admin', admin);

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});


