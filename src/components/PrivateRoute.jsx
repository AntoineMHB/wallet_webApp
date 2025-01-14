/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

// This is a mock authentication function
const isAuthenticated = () => {
    // Check if the user is authenticated
    return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoute