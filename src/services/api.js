import axios from 'axios';

const API_URL = 'https://insta-backend-gbnb.onrender.com/api';

const api = axios.create({
  baseURL: "https://insta-backend-gbnb.onrender.com/api",
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000,
  withCredentials: true
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    if (error.code === 'ERR_BLOCKED_BY_CLIENT') {
      console.error('Request blocked by browser extension or ad blocker');
    }
    return Promise.reject(error);
  }
);

// API functions
export const apiService = {
  // Authentication
  register: (userData) => api.post('/user-auth/register', userData),
  login: (credentials) => api.post('/user-auth/signin', credentials),
  getCurrentUser: () => api.get('/user-auth/me'),
  
  // Posts
  createPost: (postData) => api.post('/posts', postData),
  getPosts: () => api.get('/posts/feed'),
  getExplorePosts: () => api.get('/posts/explore'),
  likePost: (postId) => api.post(`/posts/${postId}/like`),
  deletePost: (postId) => api.delete(`/posts/${postId}`),
  commentOnPost: (postId, text) => api.post(`/posts/${postId}/comment`, { text }),
  
  // Users
  followUser: (userId) => api.post(`/users/follow/${userId}`),
  getUserProfile: (username) => api.get(`/users/profile/${username}`),
  getSuggestedUsers: () => api.get('/users/suggested'),
  searchUsers: (query = '') => api.get(`/users/search?query=${query}`),
  deleteAccount: () => api.delete('/users/account'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  
  // Demo data
  getDemoPosts: () => api.get('/demo/posts'),
  getDemoUsers: () => api.get('/demo/users')
};

// Legacy free API functions for backward compatibility
export const freeAPI = {
  getDemoPosts: () => api.get('/demo/posts'),
  getDemoUsers: () => api.get('/demo/users'),
  likePost: (postId) => apiService.likePost(postId),
  followUser: (userId) => apiService.followUser(userId)
};

export default api;