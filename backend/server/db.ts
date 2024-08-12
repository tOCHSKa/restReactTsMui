// server/db.ts
import mysql, { MysqlError, FieldInfo } from 'mysql';

let connection: mysql.Connection;

const handleError = (error: any) => {
    console.error('Échec de la connexion à la DB :', error);
};

const connectToDB = (): mysql.Connection => {
    if (connection) {
        console.log('Déjà connecté à la DB');
        return connection;
    }

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nextjs'
    });

    connection.connect((error: MysqlError) => {
        if (error) {
            handleError(error);
        } else {
            console.log('Connexion réussie à la DB');
        }
    });

    return connection;
};

export default connectToDB;
