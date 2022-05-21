import { Book, Chart, Location, Receipt21, Setting2 } from "iconsax-react";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import LocationManagement from "./pages/LocationManagement";

interface IRoutes {
    path: string;
    title: string;
    icon: JSX.Element;
    component?: React.ReactElement;
}

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    const routes = useMemo((): IRoutes[] => {
        return [
            {
                path: "/",
                icon: <Chart />,
                title: "Dashboard",
                component: <div>Dashboard</div>,
            },
            {
                path: "/estates",
                icon: <Book />,
                title: "Estate Management",
            },
            {
                path: "/news",
                icon: <Receipt21 />,
                title: "News Management",
            },
            {
                path: "/locations",
                icon: <Location />,
                title: "Location Management",
                component: <LocationManagement />,
            },
            {
                path: "/settings",
                icon: <Setting2 />,
                title: "Settings",
            },
        ];
    }, []);

    useEffect(() => {
        if (!user) {
            navigate("/auth/login");
        }
    }, [navigate, user]);

    return (
        <>
            <Sidebar>
                {routes.map((route) => (
                    <SidebarItem key={route.path} title={route.title} icon={route.icon} to={route.path} />
                ))}
            </Sidebar>
            <div className="px-10 ml-80">
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </div>
        </>
    );
};

export default Dashboard;
