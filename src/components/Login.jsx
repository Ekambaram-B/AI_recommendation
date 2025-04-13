import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/style/Login.css';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    alert("ok");
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    }

    if (validateEmail(email) && password.length >= 6) {
      console.log('Login successful:', { email, password });
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '350px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form   onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              isInvalid={!!passwordError}
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
