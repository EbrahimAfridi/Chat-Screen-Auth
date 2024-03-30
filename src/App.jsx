import ChatScreen from "./pages/ChatScreen.jsx";
import Login from "./pages/Login.jsx";
import {Route, useNavigate} from "react-router-dom";
import {useAuth} from "./context/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import {useEffect} from "react";

function App() {
  console.log("hi")
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    if (isAuthenticated) {
      navigate('/chat');
    }
    console.log("1", isAuthenticated);
  }, [isAuthenticated, navigate]);

  console.log(isAuthenticated)


  return (
    // <Route path="/">
      isAuthenticated ? <ProtectedRoute><ChatScreen/></ProtectedRoute> : <Login/>
    // </Route>
  );
}

export default App;