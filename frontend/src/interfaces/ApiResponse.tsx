// src/interfaces/ApiResponse.tsx
export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: User | null;
}
