import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Register from "./Register";
import VerifyEmail from "./VerifyEmail";
import Login from "./Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import Main from "./Main";
import SignInHeader from "./SignInHeader";
import ProfileHeader from "./ProfileHeader";
import Redactor from "./Redactor";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            path="/"
            element={
              !currentUser?.emailVerified ? (
                <>
                  <SignInHeader />
                  <Main />
                </>
              ) : (
                <>
                  <ProfileHeader />
                  <Main />
                </>
              )
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/redactor" element={<Redactor />} />
          <Route
            path="/login"
            element={
              !currentUser?.emailVerified ? (
                <Login />
              ) : (
                <Navigate to="/profile" />
              )
            }
          />
          <Route
            path="/register"
            element={
              !currentUser?.emailVerified ? (
                <Register />
              ) : (
                <Navigate to="/profile" />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
