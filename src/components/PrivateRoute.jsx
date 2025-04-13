import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth(); // Get auth state
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
