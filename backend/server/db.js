// db.js
import mysql from 'mysql2/promise';

let db = null;

const connectToDb = async () => {
    if (db) {
        console.log('Already connected to the database');
        return db;
    }

    try {
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'nextjs',
        });

        console.log('Connected to database.');
        return db;
    } catch (error) {
        console.error('Database connection failed: ', error);
        db = null;
        return null;
    }
};

export default connectToDb;
