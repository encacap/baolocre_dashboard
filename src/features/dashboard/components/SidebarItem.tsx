import { Link, To } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    title: React.ReactText;
    icon: React.ReactNode;
    to: To;
    active?: boolean;
}

const SidebarItem = ({ title, icon, to, active = false }: SidebarItemProps) => {
    return (
        <Link
            to={to}
            className={twMerge(
                "flex items-center duration-100 py-3 mb-2 last:mb-0 hover:text-encacap-500",
                active && "text-blue-500 active"
            )}
        >
            <div className="flex items-center justify-center w-10 mr-4">{icon}</div>
            <div>{title}</div>
        </Link>
    );
};

export default SidebarItem;
