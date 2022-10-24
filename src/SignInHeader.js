import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./sign_in.css";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function SignInHeader() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  return (
    <div className="sign-in">
      {/* <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>

          </Routes>
        </AuthProvider>
      </Router> */}
      {/* <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
          <Route />

          </Routes>
        </AuthProvider>
      </Router> */}
      <span>
        <Link to="/login" className="sign">
          LOGIN
        </Link>
        /
        <Link className="sign" to="/register">
          REGISTER
        </Link>
      </span>
    </div>
  );
}

export default SignInHeader;
