import React, { useState, useEffect } from 'react';
import { freeAPI } from '../services/api';   // ✅ FIX: correct import
import { useAuth } from '../context/AuthContext';

const Stories = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await freeAPI.getDemoUsers();
        const apiUsers = res.data || [];

        // Put logged-in user first
        const allUsers = user ? [user, ...apiUsers] : apiUsers;
        setUsers(allUsers.slice(0, 8));
      } catch (error) {
        console.error('Stories fetch failed:', error);
        setUsers(user ? [user] : []);
      }
    };

    fetchUsers();
  }, [user]);

  return (
    <div className="stories-container">
      {users.map((storyUser, index) => (
        <div
          key={storyUser._id || storyUser.id || index}
          className="story-item"
        >
          <div className="story-ring">
            <img
              src={
                storyUser.profilePicture ||
                storyUser.avatar ||
                '/src/assets/user1.jpg'
              }
              alt={storyUser.username || 'story'}
              className="story-avatar"
            />
          </div>
          <span className="story-username">
            {index === 0 ? 'Your story' : storyUser.username}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
