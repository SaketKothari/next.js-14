const BlogPostPage = ({ params }) => {
  return (
    <main>
      <h1>Blog post page</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;
