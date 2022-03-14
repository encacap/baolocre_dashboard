import { Route, Routes } from "react-router-dom";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
        </Routes>
    );
};

export default CommonRoutes;
