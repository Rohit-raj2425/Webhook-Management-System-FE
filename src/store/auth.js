import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext(null);

// Provider component that wraps your app and makes an auth object available to any child component that calls useAuth().
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    // Call this function when you want to authenticate the user
    const login = (token) => {
        setAuthToken(token);
    };

    // Call this function to sign out the logged-in user
    const logout = () => {
        setAuthToken(null);
    };

    // The auth object that will be accessible to children components
    const auth = {
        authToken,
        login,
        logout
    };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Hook for child components to get the auth object and re-render when it changes
export const useAuth = () => {
    return useContext(AuthContext);
};
