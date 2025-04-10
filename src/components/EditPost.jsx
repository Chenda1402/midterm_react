import React, { useState, useEffect } from 'react';
import axios from 'axios';
const EditPost = ({ selectedPost, onUpdate, setEdit }) => {
  const [title, setTitle] = useState(selectedPost?.title || '');
  const [description, setDescription] = useState(
    selectedPost?.description || ''
  );
  const [url, setUrl] = useState(selectedPost?.url || '');
  useEffect(() => {
    setTitle(selectedPost?.title || '');
    setDescription(selectedPost?.description || '');
    setUrl(selectedPost?.url || '');
  }, [selectedPost]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://midterm-json-server-nine.vercel.app/Video/${selectedPost.id}`,
        {
          title,
          description,
          url,
        }
      )
      .then((response) => {
        onUpdate(response.data);
        setEdit(true);
      })
      .catch((error) => console.error('Error updating post:', error));
  };
  return selectedPost ? (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Update Post</button>
    </form>
  ) : null;
};
export default EditPost;
