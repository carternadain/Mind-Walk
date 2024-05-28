import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook from react-router-dom to handle redirects

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { name, email, password });
      console.log('Registration successful:', response.data);
      setMessage('Registration successful! Redirecting to login page...');
      
      // Redirect to the login page after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error.message); // Log the error message
      if (error.response) {
        // Server responded with a status other than 200 range
        setMessage(`Error: ${error.response.data.error}`);
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
        <h2>Welcome to Mind Walk!</h2>
        <p>Embark on a journey of self-discovery and personal growth with our platform. Sign up today and start your transformation.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4">Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
