import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import App from "../App";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Router>
            <App>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </App>
        </Router>
    );
};

export default AppRoutes;