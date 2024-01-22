import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import { AuthProvider } from './store/auth';
import { PrivateRoute } from "./privateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        {/* <Route
              path="/dashboad"
              element={
                <PrivateRoute>
                  <SignUp />
                </PrivateRoute>
              }
            /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
