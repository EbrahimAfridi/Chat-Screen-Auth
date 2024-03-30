import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const registeredUsers = {
  'user1': 'password1',
  'user2': 'password2',
};

export default function AuthProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    console.log('authenticatedUser:', authenticatedUser);
    if (authenticatedUser) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('handleLogin is called', username, password);
    const storedPassword = registeredUsers[username];
    if (storedPassword && storedPassword === password) {
      localStorage.setItem('authenticatedUser', JSON.stringify({ username }));
      setIsAuthenticated(true);
      console.log('isAuthenticated after login:', isAuthenticated);
    } else {
      alert('Invalid credentials');
    }
  };

  const values = {
    username,
    setUsername,
    password,
    setPassword,
    isAuthenticated,
    setIsAuthenticated,
    handleLogin
  };

  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside of AuthProvider");
  }

  return context;
};