import { useEffect, useState } from "react";
import { apiService } from "../services/api";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getPosts()
      .then(res => {
        setPosts(res.data.posts || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}

export default Home;
