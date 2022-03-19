import { Danger } from "iconsax-react";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactText;
    error?: string;
    inlineError?: boolean;
}

const TextInput = ({
    label,
    type,
    id,
    className,
    value,
    error,
    inlineError,
    disabled,
    onFocus,
    onBlur,
    ...otherProps
}: InputProps) => {
    const [isFocussing, setIsFocussing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocusInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocussing(true);
        if (_.isFunction(onFocus)) {
            onFocus(e);
        }
    };

    const handleBlurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocussing(false);
        if (_.isFunction(onBlur)) {
            onBlur(e);
        }
    };

    useEffect(() => {
        if (disabled) {
            setIsFocussing(false);
        }
    }, [disabled]);

    return (
        <>
            <label
                htmlFor={id}
                className={twMerge(
                    "relative inline-block p-4 text-left border-2 rounded-xl border-gray-100 overflow-hidden",
                    className,
                    isFocussing && "border-blue-300 ring-2 ring-blue-500 ring-offset-2",
                    error && "border-red-300 ring-red-500"
                )}
            >
                <div
                    className={twMerge(
                        "flex items-center justify-between absolute left-0 right-0 z-10 duration-100 bg-white px-[inherit]",
                        !isFocussing ? "text-gray-400" : "text-blue-500",
                        isFocussing || value ? "text-sm -translate-y-2" : "",
                        error && "text-red-500"
                    )}
                >
                    {label}
                    {error && <>{inlineError ? <span>{error}</span> : <Danger size="18" variant="Broken" />}</>}
                </div>
                <input
                    type={type}
                    className={twMerge(
                        "relative block w-full outline-none duration-100 disabled:bg-inherit mb-px",
                        isFocussing || value ? "translate-y-2.5 opacity-100" : "opacity-0"
                    )}
                    value={value}
                    ref={inputRef}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                    disabled={disabled}
                    {...otherProps}
                />
            </label>
            {error && !inlineError && <div className="mt-2 text-sm text-left text-red-500">{error}</div>}
        </>
    );
};

export default TextInput;
