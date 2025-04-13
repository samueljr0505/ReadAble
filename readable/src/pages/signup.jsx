import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill out all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Signing up:', formData);
    localStorage.setItem('loggedIn', 'true');
    navigate('/home');
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-toggle">
          Already have an account?{' '}
          <span onClick={goToLogin}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;