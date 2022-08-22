import { Navigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const user = useAuthContext();
  if (! user.auth.token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;