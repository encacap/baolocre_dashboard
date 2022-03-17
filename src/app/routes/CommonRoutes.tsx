import { Route, Routes } from "react-router-dom";
import Auth from "../../features/auth";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/auth/*" element={<Auth />} />
        </Routes>
    );
};

export default CommonRoutes;
