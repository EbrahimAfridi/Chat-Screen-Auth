import ChatScreen from "./pages/ChatScreen.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Error from "./pages/Error.jsx";
import ChatProvider from "./context/ChatProvider.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoute>
        <ChatScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Error />,
  }
]);

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;