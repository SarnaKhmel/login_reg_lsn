import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { useAuthValue } from "./AuthContext";
import ProfileHeader from "./ProfileHeader";
import "./redactor.css";

function Redactor({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const postCollection = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollection, {
      title,
      postText,
      file,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    console.log(auth.currentUser.uid);

    navigate("/");
  };

  return (
    <div className="redactor">
      <div className="container">
        <h1>Create new post:</h1>
        <div className="input">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title.."
            onChange={(event) => {
              setTitle(event.target.value);
            }}></input>
        </div>
        <div className="input">
          <label>Post:</label>
          <input
            type="text"
            placeholder="Post.."
            onChange={(event) => {
              setPostText(event.target.value);
            }}></input>
        </div>
        <div className="input">
          <label>File:</label>
          <input
            type="file"
            onChange={(event) => {
              setFile(URL.createObjectURL(event.target.files[0]));
            }}></input>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default Redactor;
