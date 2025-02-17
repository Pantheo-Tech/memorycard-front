import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import App from "../App";

const AppRoutes = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </App>
    </Router>
  );
};

export default AppRoutes;
