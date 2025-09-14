import { useState, useEffect } from "react";
import ky from "ky";
import "./App.scss";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data: Post[] = await ky
        .get("https://jsonplaceholder.typicode.com/posts", { timeout: 20000 })
        .json<Post[]>();
      setPosts(data);
      console.log(posts);
    };
    const intervalGetPost = setInterval(getPosts, 5000);
    return () => {
      clearInterval(intervalGetPost);
    };
  });
  if (posts.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Posts</h1>
      <div className="main">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
