import { AddCircle } from "iconsax-react";
import PropType from "prop-types";
import { ToastOptions } from "react-toastify";
import ToastIcon from "./ToastIcon";

type ToastMessageProps = {
    title: string;
    message: string;
    toastProps?: ToastOptions;
    closeToast?: () => void;
};

const ToastMessage = ({ title, message, toastProps, closeToast }: ToastMessageProps) => {
    const type = toastProps?.type || "info";
    const iconColor = {
        info: "text-blue-500",
        success: "text-green-300",
        warning: "text-yellow-500",
        error: "text-red-300",
        default: "text-blue-500",
        loading: "text-blue-500",
    };

    return (
        <div className="p-4 text-sm text-black group w-80">
            <div className="flex items-start">
                <div className="w-6 h-6 flex-shrink-0 mr-3.5 mt-0.5">
                    <ToastIcon type={type} size={24} className={`${iconColor[type]}`} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center">
                        <div className="flex-1 mt-1 font-medium">{title}</div>
                        <AddCircle
                            size={20}
                            className="text-gray-300 duration-300 rotate-45 group-hover:-rotate-45 group-hover:text-gray-500"
                            onClick={closeToast}
                        />
                    </div>
                    <div className="mt-1 mb-1.5">{message}</div>
                </div>
            </div>
        </div>
    );
};

ToastMessage.propTypes = {
    title: PropType.string.isRequired,
    message: PropType.string.isRequired,
    toastProps: PropType.object,
    closeToast: PropType.func,
};

export default ToastMessage;
