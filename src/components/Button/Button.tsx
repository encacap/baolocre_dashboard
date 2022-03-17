import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: "light" | "dark" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "link";
    children?: React.ReactNode;
    isLoading?: boolean;
    icon?: React.ReactNode;
}

const Button = ({ className, color = "primary", icon, isLoading = false, children, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "px-4 py-2 font-semibold border-2 border-encacap-500 hover:border-encacap-700 disabled:hover:border-encacap-500 text-white rounded-xl bg-encacap-500 hover:bg-encacap-700 disabled:bg-encacap-500 duration-100 disabled:opacity-50 disabled:cursor-not-allowed",
                color === "light" &&
                    "border-gray-200 hover:border-gray-200 disabled:hover:border-gray-200 bg-gray-100 disabled:bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50",
                className,
                "flex items-center justify-center"
            )}
            {...otherProps}
        >
            {isLoading && (
                <div className="w-4 h-4 mb-px mr-3 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
            )}
            {icon && !isLoading && <div className="mr-3">{icon}</div>}
            {children}
        </button>
    );
};
export default Button;
