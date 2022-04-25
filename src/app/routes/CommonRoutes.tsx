import { Route, Routes } from "react-router-dom";
import Auth from "../../features/auth/Auth";
import Dashboard from "../../features/dashboard/Dashboard";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/auth/*" element={<Auth />} />
        </Routes>
    );
};

export default CommonRoutes;
