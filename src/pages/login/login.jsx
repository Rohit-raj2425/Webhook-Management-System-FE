import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from "./login.module.css";
import { useAuth } from '../../store/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await axios.post('http://localhost:8000/v1/login', {
                email: email,
                password: password
            });
          console.log(response);
          
          if (response.status === 200) {
            auth.login(response.data.token);
            console.log('Token:', response.data.token);
            navigate('/webhookList');
          } else {
              console.error('Login failed:', response.data.message);
          }
      } catch (error) {
        alert(`${error.response.data}`)
          console.error('There was an error!', error);
      }
    };

    return (
        <div className={classes.loginContainer}>
            <h2>Welcome Back</h2>
            <p>Enter your credentials to login</p>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputgroup}>
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.inputgroup}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={classes.loginbutton}>Login</button>
            </form>
            <p className={classes.signuptext}>
                Don't have an account? <a href="/signup" className={classes.signuplink}>Sign Up</a>
            </p>
        </div>
    );
};

export default Login;

