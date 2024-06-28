import './App.css';
import { useState } from 'react';
import UserProfile from './components/user-information';
import DisplayUserInfo from './components/edit-user';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  return (
    <>
      <UserProfile user={user} setUser={setUser} />
      <DisplayUserInfo user={user} />
    </>
  );
}

export default App;
