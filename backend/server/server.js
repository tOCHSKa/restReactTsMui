// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDb from './db.js'; // Assurez-vous que le chemin est correct

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connectToDb(); // Essayer de se connecter à la base de données au démarrage du serveur
});
