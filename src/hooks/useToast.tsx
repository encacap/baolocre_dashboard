import React from "react";
import { toast, ToastOptions } from "react-toastify";
import ToastMessage from "../components/ToastMessage/ToastMessage";

type Type = "info" | "success" | "warning" | "error" | "loading";

interface Options extends Omit<ToastOptions, "type"> {
    type?: Type;
}

const useToast = (generalOptions?: ToastOptions) => {
    const notify = (title: string, message: string, options: Options): React.ReactText => {
        return toast(<ToastMessage title={title} message={message} />, {
            ...generalOptions,
            ...options,
        } as ToastOptions);
    };

    const update = (id: React.ReactText, title: string, message: string, options: Options): void => {
        toast.update(id, {
            render: <ToastMessage title={title} message={message} />,
            ...generalOptions,
            ...options,
        } as ToastOptions);
    };

    return {
        info: (title: string, message: string, options?: ToastOptions) => {
            return notify(title, message, { ...options, type: "info" });
        },
        success: (title: string, message: string, options?: ToastOptions) => {
            return notify(title, message, { ...options, type: "success" });
        },
        warning: (title: string, message: string, options?: ToastOptions) => {
            return notify(title, message, { ...options, type: "warning" });
        },
        error: (title: string, message: string, options?: ToastOptions) => {
            return notify(title, message, { ...options, type: "error" });
        },
        loading: (title: string, message: string, options?: ToastOptions) => {
            return notify(title, message, { ...options, type: "loading", autoClose: false });
        },
        update: (id: React.ReactText, title: string, message: string, type: Type, options?: ToastOptions) => {
            update(id, title, message, { ...options, type });
        },
        dismiss: (id: React.ReactText) => {
            return toast.dismiss(id);
        },
    };
};

export default useToast;
