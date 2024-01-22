import React, { useState } from 'react';
import classes from "./signup.module.css";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        // Implement sign-up logic here
        console.log('Sign Up', { username, email, password });
        // Typically, you would send a request to your backend server here
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
