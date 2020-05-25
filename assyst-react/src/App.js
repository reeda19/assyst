import React, { useState, useEffect } from "react";

// Components
import CreatePost from "./FeedComponents/CreatePost.js";
import Post from "./FeedComponents/Post.js";

import "./App.css";

function App() {
  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    fetch("/get_req")
    .then(res => res.json())
    .then(data => {
      setPostInfo([...postInfo, ...data]);
    });
  }, []);

  const handlePost = () => {
    console.log('working')
  }

  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <CreatePost onPost={handlePost}/>
        
        {postInfo.map((post, index) => (
          <Post title={post.Title} location={post.Location} desc={post.Description} key={index}/> 
        ))}

      </div>
    </div>
  );
}

export default App;
