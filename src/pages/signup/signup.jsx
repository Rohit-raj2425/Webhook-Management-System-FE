import React, { useState } from 'react';
import classes from "./signup.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/v1/signup', {
                username,
                email,
                password
            });

            if (response.status === 200) {
                console.log('Sign Up Successful', response.data);
                navigate('/login');
              } else {
                  console.error('Login failed:', response.data.message);
              }

        } catch (error) {
            console.error('Error during sign up:', error);
        }
    };

    return (
        <div className={classes.signupcontainer}>
            <h2>Sign up</h2>
            <p>Create your account</p>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputgroup}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={classes.inputgroup}>
                    <input
                        type="email"
                        placeholder="Email"
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
                <div className={classes.inputgroup}>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={classes.signupbutton}>Sign up</button>
            </form>
            <p className={classes.loginlink}>
                Already have an account? <a href="/" className={classes.login}>Login</a>
            </p>
        </div>
    );
};

export default SignUp;
