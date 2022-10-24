import React from "react";
import { Link } from "react-router-dom";
import "./sign_in.css";

function ProfileHeader() {
  return (
    <div className="sign-in">
      <span>
        <Link className="sign" to="/register">
          PROFILE
        </Link>
      </span>
    </div>
  );
}

export default ProfileHeader;
