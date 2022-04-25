import { CloseCircle, Danger, IconProps, Information, TickCircle } from "iconsax-react";
import React from "react";
import { TypeOptions } from "react-toastify";

interface ToastIconProps extends IconProps {
    type: TypeOptions;
    size: number;
}

const ToastIcon = ({ className, type, ...otherProps }: ToastIconProps) => {
    const icon = {
        info: <Information />,
        success: <TickCircle />,
        warning: <Danger />,
        error: <CloseCircle />,
        loading: (
            <div className="w-5 h-5 mt-0.5 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        ),
        default: <Information />,
    };

    const selectedIcon = icon[type] || icon.default;

    return (
        <>
            {React.cloneElement(selectedIcon, {
                ...otherProps,
                className: `${className} ${selectedIcon.props.className}`,
                variant: "Broken",
            })}
        </>
    );
};

export default ToastIcon;
