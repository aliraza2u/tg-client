function Blog({ posts }) {
    return (
      <ul>
        {posts?.map((post) => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
    );
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://tahaifghar-api.herokuapp.com/api/v1/product");
    const posts = await res.json();
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts: posts.message,
      },
    };
  }
  
  export default Blog;
  