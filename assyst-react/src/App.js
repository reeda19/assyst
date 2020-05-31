import React, { useState, useEffect } from "react";

// Components
import CreatePost from "./FeedComponents/CreatePost.js";
import Post from "./FeedComponents/Post.js";
import Nav from "./FeedComponents/Nav.js";

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
    <>
    <Nav />
    <div className="App">
      <div className="post-list">
        
        {postInfo.map((post, index) => (
          <Post title={post.Title} tags={post.Tags} user={post.User} location={post.Location} desc={post.Description} key={index}/> 
        ))}
      </div>
      <CreatePost onPost={handlePost}/>
    </div>
    </>
  );
}

export default App;
