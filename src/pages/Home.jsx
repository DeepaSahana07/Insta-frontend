import { useEffect, useState } from "react";
import { apiService } from "../services/api";
import { fakePosts } from "../services/fakeData";
import Post from "../components/Post";
import Stories from "../components/Stories";
import Suggestions from "../components/Suggestions";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // First try to get real posts from backend
        const res = await apiService.getPosts();
        const realPosts = res.data?.posts || [];
        
        // If we have real posts, show them first, then fake posts
        if (realPosts.length > 0) {
          const allPosts = [...realPosts, ...fakePosts];
          setPosts(allPosts);
        } else {
          // If no real posts, just show fake posts
          setPosts(fakePosts);
        }
      } catch (error) {
        console.error("Error fetching feed:", error);
        // Fallback to fake posts if backend fails
        setPosts(fakePosts);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className="home-layout">
      {/* FEED COLUMN */}
      <div className="home-feed">
        {/* STORIES */}
        <Stories />

        {/* POSTS */}
        {loading && <p style={{ color: 'var(--text-primary)' }}>Loading...</p>}

        {!loading && posts.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>
            No posts yet
          </p>
        )}

        {!loading &&
          posts.map((post) => (
            <Post key={post._id || post.id} post={post} />
          ))}
      </div>

      {/* SUGGESTIONS COLUMN */}
      <div className="home-suggestions">
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
