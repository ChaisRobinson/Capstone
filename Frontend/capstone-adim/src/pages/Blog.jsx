import React from 'react';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-posts">
       
        <div className="blog-post">
          <h2>Post Title 1</h2>
          <p>Content of the first blog post...</p>
        </div>
        <div className="blog-post">
          <h2>Post Title 2</h2>
          <p>Content of the second blog post...</p>
        </div>
        
      </div>
    </div>
  );
};

export default BlogPage;
