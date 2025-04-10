import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PostList = ({ onEdit }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://midterm-json-server-nine.vercel.app/Video')
      .then((response) => setPosts(response.data)) // Fetch first 5 posts
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://midterm-json-server-nine.vercel.app/Video/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id)); // Remove deleted post from state
      })
      .catch((error) => console.error('Error deleting post:', error));
  };
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <iframe width="420" height="315" src={post.url}></iframe>

          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default PostList;
