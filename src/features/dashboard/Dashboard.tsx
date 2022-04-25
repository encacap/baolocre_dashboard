import { Book, Chart, Location, Receipt21, Setting2 } from "iconsax-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, [navigate, user]);

    return (
        <>
            <Sidebar>
                <SidebarItem title="Dashboard" icon={<Chart />} to="/" />
                <SidebarItem title="Estate Management" icon={<Book />} to="/estates" />
                <SidebarItem title="News Management" icon={<Receipt21 />} to="/news" />
                <SidebarItem title="Location Management" icon={<Location />} to="/locations" />
                <SidebarItem title="Settings" icon={<Setting2 />} to="/settings" />
            </Sidebar>
            <Routes>
                <Route path="/" element={<div>Dashboard</div>} />
            </Routes>
        </>
    );
};

export default Dashboard;
