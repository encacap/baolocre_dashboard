import React, { Children, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import encacapLogoImg from "../../../assets/images/encacap_logo.svg";

interface SidebarProps {
    children: React.ReactElement[];
}

const Sidebar = ({ children }: SidebarProps) => {
    const { pathname } = useLocation();
    const sidebarLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activatedElement = document.querySelector("#sidebar .active") as HTMLElement;
        const sidebarLineElement = sidebarLineRef.current;
        if (!activatedElement) return;
        if (!sidebarLineElement) return;
        sidebarLineElement.style.top = `${activatedElement?.offsetTop}px`;
    }, [pathname]);

    return (
        <div className="fixed inset-y-0 z-40 border-r-2 border-gray-100 w-80" id="sidebar">
            <div className="flex items-center h-20 px-8 bg-white border-b-2 border-gray-100">
                <div className="h-10">
                    <img src={encacapLogoImg} alt="Encacap Logo" className="h-full" />
                </div>
            </div>
            <div className="relative px-8 mt-8 mb-14">
                {Children.map(children, (child) => {
                    return React.cloneElement(child as React.ReactElement, {
                        active: pathname === child.props.to,
                    });
                })}
                <div
                    className="absolute top-0 -right-0.5 w-1 h-12 duration-200 bg-encacap-500 rounded-l-3xl"
                    ref={sidebarLineRef}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
