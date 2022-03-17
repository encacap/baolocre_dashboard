import TextInput from "./TextInput";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
    error?: string;
    inlineError?: boolean;
}

const Input = ({ type, ...otherProps }: InputProps) => {
    const textInputTypes = ["text", "email", "password"];

    return <>{textInputTypes.includes(type) && <TextInput type={type} {...otherProps} />}</>;
};

export default Input;
