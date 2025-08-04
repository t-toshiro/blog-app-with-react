import { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase"
import { useNavigate } from "react-router-dom";
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      text: text,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    navigate("/");
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [])

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Create new post</h1>
        <div className="inputPost">
          <div>title</div>
          <input type="text" placeholder='Input title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="inputPost">
          <div>text</div>
          <textarea placeholder='Input text' onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={createPost}>create post</button>
      </div>
    </div>
  )
}

export default CreatePost