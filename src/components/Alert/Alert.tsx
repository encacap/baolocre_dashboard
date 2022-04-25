import { twMerge } from "tailwind-merge";
import ToastIcon from "../ToastMessage/ToastIcon";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  message?: Error | string;
  type?: "success" | "error" | "warning" | "info";
  isShowErrorStack?: boolean;
}

const Alert = ({
  title,
  message,
  type = "info",
  isShowErrorStack = false,
  className,
  children,
  ...otherProps
}: AlertProps) => {
  const messageText = message instanceof Error ? message.message : message;
  const messageStack =
    message instanceof Error ? message.stack?.split("\n", 2)[1]?.trim() : "";
  const colorClassName = {
    info: "bg-blue-50 text-blue-500",
    success: "bg-green-50 text-green-500",
    error: "bg-red-50 text-red-500",
    warning: "bg-orange-50 text-orange-500",
  };

  return (
    <div
      className={twMerge(
        className,
        "flex p-4 rounded-xl",
        colorClassName[type]
      )}
      {...otherProps}
    >
      <ToastIcon type="error" size={20} className="flex-shrink-0 mt-0.5" />
      <div className="ml-4">
        <div className="font-semibold">{title}</div>
        <div className="mt-1.5 mb-0.5 text-sm">{messageText}</div>
        {messageStack && isShowErrorStack && (
          <div className="mt-1.5 mb-0.5 text-sm">
            <span className="font-semibold">Detail: </span>
            <span className="break-words">{messageStack}</span>
          </div>
        )}
        {children && (
          <div className="mt-2.5 text-sm font-semibold">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Alert;
