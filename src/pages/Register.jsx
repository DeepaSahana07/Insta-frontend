import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: ''
  });

  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [localError, setLocalError] = useState('');

  const { register, isAuthenticated, loading, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    clearError();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!formData.username || !formData.email || !formData.password || !formData.fullName) {
      setLocalError('All fields are required');
      return;
    }

    const submitData = {
      ...formData,
      profilePicture:
        profilePictureUrl ||
        `https://i.pravatar.cc/150?u=${formData.username}`
    };

    const result = await register(submitData);

    if (!result?.success) {
      setLocalError(result?.message || 'Registration failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Instagram</h1>

        {(error || localError) && (
          <div className="login-error">
            {error || localError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="login-input"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="login-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            minLength="6"
            required
          />

          <input
            type="url"
            placeholder="Profile Picture URL (optional)"
            value={profilePictureUrl}
            onChange={(e) => setProfilePictureUrl(e.target.value)}
            className="login-input"
          />

          {profilePictureUrl && (
            <div className="profile-preview-container">
              <img
                src={profilePictureUrl}
                alt="Preview"
                className="profile-preview"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        <p className="login-switch">
          Have an account?{' '}
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
