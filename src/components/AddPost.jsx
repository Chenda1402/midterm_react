import React, { useState } from 'react';
import axios from 'axios';
const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://midterm-json-server-nine.vercel.app/Video', {
        title,
        description,
        url,
      })
      .then((response) => {
        onAdd(response.data);
        setTitle('');
        setDescription('');
        setUrl('');
      })
      .catch((error) => console.error('Error adding post:', error));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        value={url}
        placeholder="Url"
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};
export default AddPost;
