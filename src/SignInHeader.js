import React from "react";
import { Link } from "react-router-dom";
import "./sign_in.css";

function SignInHeader() {
  return (
    <div className="sign-in">
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
