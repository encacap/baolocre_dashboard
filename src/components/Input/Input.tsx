import TextInput from "./TextInput";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactText;
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
    error?: string;
    inlineError?: boolean;
}

const Input = ({ type, ...otherProps }: InputProps) => {
    const textInputTypes = ["text", "email", "password"];

    return <>{textInputTypes.includes(type as string) && <TextInput type={type} {...otherProps} />}</>;
};

export default Input;
