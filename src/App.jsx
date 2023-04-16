import React, { useState } from "react";
import AddBlogForm from "./components/AddBlogForm";
import BlogList from "./components/BlogList";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const onBlogCreation = (blog) => {
    setBlogs((prevState) => {
      return [...prevState, blog]
    });
  };
  return (
    <div className="p-20">
      <AddBlogForm onBlogCreation={onBlogCreation} />
      <BlogList blogs={blogs}/>
    </div>
  );
};

export default App;
