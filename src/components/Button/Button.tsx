import { twMerge } from "tailwind-merge";

type Colors = "primary" | "light";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: Colors;
    children?: React.ReactNode;
    isLoading?: boolean;
    icon?: React.ReactNode;
    size?: "sm" | "md";
}

const Button = ({
    className,
    color = "primary",
    icon,
    isLoading = false,
    size = "md",
    children,
    ...otherProps
}: ButtonProps) => {
    const colorClassName = {
        primary:
            "border-encacap-500 hover:border-encacap-700 disabled:hover:border-gray-200 disabled:border-gray-200 text-white bg-encacap-500 hover:bg-encacap-700 disabled:bg-gray-200 focus:ring-encacap-700",
        light: "border-gray-200 hover:border-gray-200 disabled:hover:border-gray-200 bg-gray-100 disabled:bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-black disabled:text-gray-500 focus:ring-gray-200",
    };
    const sizeClassName = {
        sm: "pt-1 pb-1.5 font-semibold text-sm rounded-lg",
        md: "py-2 font-semibold text-base",
    };
    const spinnerColorClassName = {
        primary: "border-white",
        light: "border-gray-500",
    };

    return (
        <button
            className={twMerge(
                "px-4 py-2 font-semibold border-2 rounded-xl duration-100 outline-none focus:ring-2 focus:ring-offset-2",
                colorClassName[color],
                sizeClassName[size],
                className,
                "flex items-center justify-center"
            )}
            {...otherProps}
        >
            {isLoading && (
                <div
                    className={twMerge(
                        "w-4 h-4 mb-px mr-3 border-2 rounded-full animate-spin",
                        spinnerColorClassName[color],
                        "border-t-transparent"
                    )}
                ></div>
            )}
            {icon && !isLoading && <div className="mr-3">{icon}</div>}
            {children}
        </button>
    );
};
export default Button;
