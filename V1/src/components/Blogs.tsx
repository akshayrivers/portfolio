import React from 'react';

function Blogs() {
  return (
    <section>
      <div className='text-4xl font-bold'><h2>Blogs</h2></div>
      <div>
        <h3>Blog Title</h3>
        <p>Brief overview or summary of the blog post.</p>
        <a href="link-to-blog">Read more</a>
      </div>
      {/* Repeat for each blog */}
    </section>
  );
}

export default Blogs;
