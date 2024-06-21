import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook from react-router-dom to handle redirects

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('Login successful:', response.data);
      
      // Store the token in local storage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.message); // Log the error message
      if (error.response) {
        // Server responded with a status other than 200 range
        setMessage(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        setMessage('Error: No response from server.');
      } else {
        // Something else happened
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2>Login to Mind Walk</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-dark">Login</button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
