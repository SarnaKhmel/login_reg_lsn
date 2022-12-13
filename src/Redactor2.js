import React, { useEffect, useState } from "react";
import "./Redactor.css";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";

const Redactor = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const postCollection = collection(db, "post");

  const createPost = async () => {
    await addDoc(postCollection, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
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
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default Redactor;
