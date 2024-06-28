import React from 'react';

function UserProfile({ user, setUser }) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <>
    <form>
      <h2>Korisnički Profil</h2>
            <p>Ime</p>
            <input 
              type="text" 
              name="name" 
              value={user.name} 
              onChange={handleChange} 
            />
            <p>Email:</p>
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleChange} />
      </form>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default UserProfile;
