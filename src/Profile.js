import "./profile.css";
import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function Profile({ setIsAuth }) {
  const { currentUser } = useAuthValue();

  console.log("Log");
  const userLog = currentUser?.emailVerified;
  console.log(userLog);
  return (
    <>
      <ProfileHeader />
      <div className="center">
        <div className="profile">
          <h1>Profile</h1>
          <p>
            <strong>Email: </strong>
            {currentUser?.email}
          </p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
    </>
  );
}

export default Profile;
