import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication state from local storage (optional)
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // Login function
    const login = (token) => {
        localStorage.setItem("authToken", token); // Store token
        setIsAuthenticated(true);
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("authToken"); // Remove token
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
