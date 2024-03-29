import { useState, useEffect } from 'react';
import ChatScreen from "../pages/ChatScreen.jsx";

const registeredUsers = {
  'user1': 'password1',
  'user2': 'password2',
};

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedPassword = registeredUsers[username];
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('authenticatedUser', JSON.stringify({ username }));
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return (
      <div>
       <ChatScreen setIsAuthenticated={setIsAuthenticated}/>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;