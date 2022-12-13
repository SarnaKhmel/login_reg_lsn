import React from "react";
import { Link } from "react-router-dom";
import "./sign_in.css";

function ProfileHeader() {
  return (
    <div className="sign-in">
      <div>
        <span>
          <Link className="sign" to="/">
            MAIN
          </Link>
        </span>
      </div>
      <div>
        <span>
          <Link className="sign" to="/redactor">
            REDACTOR
          </Link>
        </span>
        <span>
          <Link className="sign" to="/profile">
            PROFILE
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ProfileHeader;
