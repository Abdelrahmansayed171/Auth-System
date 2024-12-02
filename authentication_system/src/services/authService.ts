import axios from 'axios';
import { User, LoginCredentials, RegisterCredentials } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, this would be an API call:
      // const response = await axios.post(`${API_URL}/auth/login`, credentials);
      // return response.data;
      
      return {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw error;
    }
  }

  async register(credentials: RegisterCredentials): Promise<User> {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app:
      // const response = await axios.post(`${API_URL}/auth/register`, credentials);
      // return response.data;
      
      return {
        id: '1',
        email: credentials.email,
        name: credentials.name,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 500));
      // In a real app:
      // await axios.post(`${API_URL}/auth/logout`);
      localStorage.removeItem('token');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Logout failed');
      }
      throw error;
    }
  }
}

export const authService = new AuthService();