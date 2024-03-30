import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from "./context/AuthProvider.jsx";
import ChatProvider from "./context/ChatProvider.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ChatScreen from "./pages/ChatScreen.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoute>
        <ChatScreen/>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Error/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <RouterProvider router={router}>
          <App/>
        </RouterProvider>
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
)
