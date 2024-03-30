import {useAuth} from "../context/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return <>{children}</>;
};

export default ProtectedRoute;