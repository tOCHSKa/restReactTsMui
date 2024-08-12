import axios from 'axios';

const API_URL = 'http://localhost:3006/api/login';

export const Login = async (email: string, password: string) => {
    try {
        const response = await axios.post(API_URL, { email, password });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        throw error;
    }
};
