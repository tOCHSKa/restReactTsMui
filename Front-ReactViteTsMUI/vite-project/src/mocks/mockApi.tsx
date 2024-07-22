// src/mocks/mockApi.ts
import { LoginResponse } from '../interfaces/ApiResponse';

export const mockLoginResponse: LoginResponse = {
  success: true,
  message: "Login successful",
  user: {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com",
    token: "abc123xyz"
  }
};

// Fonction pour simuler un appel à l'API de login
export const mockLoginApi = (email: string, password: string): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'johndoe@example.com' && password === 'password123') {
        resolve(mockLoginResponse);
      } else {
        resolve({
          success: false,
          message: "Invalid credentials",
          user: null
        });
      }
    }, 1000);
  });
};
