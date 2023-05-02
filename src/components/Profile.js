import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://api.previewed.com/user/profile')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1>Welcome back, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <p>Skills: {user.skills.join(', ')}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default Profile;
