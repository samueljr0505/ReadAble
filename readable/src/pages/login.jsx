import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Logging in:', formData);
    localStorage.setItem('loggedIn', 'true');
    navigate('/home');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Log In</h2>
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
          <button type="submit">Log In</button>
        </form>
        <p className="auth-toggle">
          Don't have an account?{' '}
          <span onClick={goToSignUp}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};


export default Login;