/* eslint-disable react/prop-types */
import Login from "@/components/Login";


const LoginPage = ({ setIsAuthenticated }) => {
  return (
    <div>
        <Login setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default LoginPage;