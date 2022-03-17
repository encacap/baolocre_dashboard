import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const Auth = () => {
    return (
        <div className="flex w-screen h-screen">
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default Auth;
