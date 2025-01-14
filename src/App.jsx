import { useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";
import Budgets from "./pages/Budgets";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />}  />
        <Route path="/signupPage" element={<SignUp />} />

        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route path="/budgets" element={<Budgets />}/>
            <Route path="/reports" element={<Reports />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route index element={<Home />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

      </Routes>
    </Router>
   
  );
}

export default App;