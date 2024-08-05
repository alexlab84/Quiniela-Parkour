import '../styles/layout/_header.scss';
import { useState } from 'react';

import Header from './Header';
import Login from './Login';
import '../styles/layout/_header.scss';
import '../styles/layout/_login.scss';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (user, pass) => {
    setUsername(user);
    setPassword(pass);
  };

  return (
    <>
      <Header />
      <Login onLogin={handleLogin}/>
      {username}
      {password}
    </>
  )
}

export default App;
