// import {useState, useEffect} from 'react';
import ChatScreen from "./pages/ChatScreen.jsx";
import Login from "./pages/Login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./pages/Error.jsx";

const registeredUsers = {
  'user1': 'password1',
  'user2': 'password2',
};

// Creating routers
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/chat',
    element: <ChatScreen/>,
  },
  {
    path: '*',
    element: <Error/>,
  }
]);

  function App() {
    return <RouterProvider router={router} />;
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    //
    // useEffect(() => {
    //   const authenticatedUser = localStorage.getItem('authenticatedUser');
    //   if (authenticatedUser) {
    //     setIsAuthenticated(true);
    //   }
    // }, []);
    //
    // const handleLogin = (e) => {
    //   e.preventDefault();
    //   const storedPassword = registeredUsers[username];
    //   if (storedPassword && storedPassword === password) {
    //     localStorage.setItem('authenticatedUser', JSON.stringify({username}));
    //     setIsAuthenticated(true);
    //   } else {
    //     alert('Invalid credentials');
    //   }
    // };
    //
    // if (isAuthenticated) {
    //   return (
    //     <div>
    //       <ChatScreen setIsAuthenticated={setIsAuthenticated}/>
    //     </div>
    //   );
    // }
    //
    // return (
    //   <>
    //     <Login
    //       handleLogin={handleLogin}
    //       password={password}
    //       setPassword={setPassword}
    //       username={username}
    //       setUsername={setUsername}
    //     />
    //   </>
    // );
  }

export default App;