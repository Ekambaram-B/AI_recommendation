import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Product';
import Recommendations from './components/Recommendation';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from "./components/AuthContext";
import Signup from "./components/SignUP";

const App = () => {
    const { isAuthenticated } = useAuth(); // Get auth state

    return (
        <Router>
            {isAuthenticated && <Navbar />} {/* Show Navbar only when logged in */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
