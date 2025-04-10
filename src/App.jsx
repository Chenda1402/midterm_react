import { useState } from 'react';
import Posts from './components/Posts';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import './App.css';
function App() {
  const [isEdit, setEdit] = useState(false);
  const [isAddNew, setAddNew] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]); // Add new post to state
    setAddNew(newPost);
  };
  const handleUpdatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    ); // Update state
    setSelectedPost(null); // Hide edit form
    setEdit(updatedPost);
  };
  return (
    <div>
      <h1>React CRUD with JSONPlaceholder</h1>
      <AddPost onAdd={handleAddPost} setAddNew={setAddNew} />
      <EditPost
        selectedPost={selectedPost}
        onUpdate={handleUpdatePost}
        setEdit={setEdit}
      />
      <PostList onEdit={setSelectedPost} isAddNew={isAddNew} isEdit={isEdit} />
    </div>
  );
}
export default App;
