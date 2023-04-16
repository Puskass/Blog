import React from "react";

const BlogItem = () => {
  return (
    <li className="p-6 rounded-md shadow-md">
      <h1 className="text-sky-700 text-lg ">Title</h1>
      <h3 className="mb-1">
        Created At: <span className="italic text-blue-500">16th Apr 2023</span>
      </h3>
      <p className="text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        repellendus! Nisi obcaecati temporibus ipsa enim minima fugiat quas quos
        modi!
      </p>
    </li>
  );
};

export default BlogItem;
