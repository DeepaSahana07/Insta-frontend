import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/api';

const Profile = () => {
  const { username } = useParams();
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, [username, currentUser]);

  const fetchUserProfile = async () => {
    try {
      const targetUsername = username || currentUser?.username;
      
      if (!targetUsername) {
        setUser(null);
        setPosts([]);
        setLoading(false);
        return;
      }
      
      const response = await apiService.getUserProfile(targetUsername);
      
      if (response.data.success) {
        setUser(response.data.user);
        setPosts(response.data.user.posts || []);
      } else {
        setUser(null);
        setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setUser(null);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }
    
    const confirmText = prompt('Type "DELETE" to confirm account deletion:');
    if (confirmText !== 'DELETE') {
      alert('Account deletion cancelled.');
      return;
    }
    
    try {
      const response = await apiService.deleteAccount();
      
      if (response.data.success) {
        alert('Account deleted successfully.');
        localStorage.clear();
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Delete account failed:', error);
      alert('Failed to delete account. Please try again.');
    }
  };

  const handleDeletePost = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      const response = await apiService.deletePost(postId);
      
      if (response.data.success) {
        // Remove post from local state
        setPosts(posts.filter(post => post._id !== postId && post.id !== postId));
        setSelectedPost(null);
        alert('Post deleted successfully!');
      }
    } catch (error) {
      console.error('Delete post failed:', error);
      alert('Failed to delete post. You can only delete your own posts.');
    }
  };
  
  if (loading) {
    return (
      <div className="main-content">
        <div className="text-center py-5 text-gray-900 dark:text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="main-content">
        <div className="text-center py-5">
          <h3 className="text-gray-900 dark:text-white">User not found</h3>
        </div>
      </div>
    );
  }

  const isOwnProfile =
  currentUser?._id === user._id ||
  currentUser?.id === user._id ||
  currentUser?.username === user.username;


  return (
    <div className="main-content">
      <div className="container" style={{ maxWidth: '935px', margin: '0 auto', padding: '20px' }}>
        {/* Profile Header */}
        <div className="d-flex align-items-center mb-5" style={{ padding: '30px 0' }}>
          <img
            src={user.profilePicture || '/src/assets/user1.jpg'}
            alt={user.username}
            className="rounded-circle me-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div>
            <h2 className="mb-2" style={{ fontSize: '28px', fontWeight: '300', color: 'var(--text-primary)' }}>
              {user.username}
            </h2>
            <h4 className="mb-3" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
              {user.fullName}
            </h4>
            <div className="d-flex gap-4 mb-3">
              <span style={{ color: 'var(--text-primary)' }}>
                <strong>{user.postsCount || posts.length}</strong> posts
              </span>
              <span style={{ color: 'var(--text-primary)' }}>
                <strong>{user.followersCount || user.followers?.length || 0}</strong> followers
              </span>
              <span style={{ color: 'var(--text-primary)' }}>
                <strong>{user.followingCount || user.following?.length || 0}</strong> following
              </span>
            </div>
            
            {isOwnProfile && (
              <button
                onClick={handleDeleteAccount}
                style={{
                  background: '#ed4956',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Delete Account
              </button>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="row">
          {posts.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="bi bi-camera" style={{ fontSize: '64px', color: 'var(--text-secondary)' }}></i>
              <h3 className="mt-3" style={{ color: 'var(--text-primary)' }}>No posts yet</h3>
            </div>
          ) : (
            posts.map(post => (
              <div key={post._id || post.id} className="col-md-4 mb-3">
                <div className="position-relative" style={{ cursor: 'pointer' }}>
                  <img
                    src={post.imageUrl || post.image}
                    alt="Post"

                    className="w-100"
                    style={{
                      aspectRatio: '1',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    onClick={() => setSelectedPost(post)}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      borderRadius: '8px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <div className="text-white d-flex align-items-center">
                      <i className="bi bi-heart-fill me-2"></i>
                      {Array.isArray(post.likes) ? post.likes.length : (post.likes || 0)}
                      <i className="bi bi-chat-fill ms-4 me-2"></i>
                      {post.comments?.length || 0}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div 
            style={{
              background: 'var(--bg-primary)',
              borderRadius: '12px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Delete Button - Top Right */}
            {isOwnProfile && (
              <button
                onClick={() => handleDeletePost(selectedPost._id || selectedPost.id)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(237, 73, 86, 0.9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  zIndex: 10,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
                title="Delete post"
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                zIndex: 10
              }}
            >
              ×
            </button>

            <img 
              src={selectedPost.imageUrl || selectedPost.image} 
              alt="Post" 
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                display: 'block'
              }}
            />
            
            <div style={{ padding: '20px' }}>
              <p style={{ fontSize: '16px', marginBottom: '10px', color: 'var(--text-primary)' }}>
                <strong>{selectedPost.user?.username || user.username}</strong>
                {selectedPost.caption && ` ${selectedPost.caption}`}
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                {Array.isArray(selectedPost.likes) ? selectedPost.likes.length : (selectedPost.likes || 0)} likes
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;