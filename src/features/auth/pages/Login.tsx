import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import encacap_logo from "../../../assets/images/encacap_logo.svg";
import { setDocumentTitle } from "../../../common/helpers";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const Login = () => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState<Error | null>(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState<Error | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAllowSubmit, setIsAllowSubmit] = useState(false);

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearErrors = useCallback(() => {
        setError(null);
        setUsernameError(null);
        setPasswordError(null);
    }, []);

    useEffect(() => {
        setDocumentTitle("Login");
    }, []);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        clearErrors();

        // authAPI
        //     .loginWithEmailAndPassword(username, password)
        //     .then((data) => {
        //         const { user, tokens } = data;
        //         dispatch(setUser(user));
        //         dispatch(setTokens(tokens));
        //         const redirectTo = searchParams.get("redirect") || AUTH_REDIRECT_DEFAULT_PATH;
        //         navigate(redirectTo, {
        //             replace: true,
        //         });
        //     })
        //     .catch((error) => {
        //         const { response } = error;
        //         if (response) {
        //             const { status } = response;
        //             if (status === 401) {
        //                 setError(new Error("Email or password is incorrect."));
        //             } else if (status === 404) {
        //                 setError(
        //                     new Error(
        //                         `User with email ${username} not found. Please contact your administrator to create an account.`
        //                     )
        //                 );
        //             }
        //         }
        //         setIsSubmitting(false);
        //     });
    };

    useEffect(() => {
        if (username.length > 0 && password.length > 0) {
            setIsAllowSubmit(true);
        }
    }, [username, password]);

    return (
        <div className="w-full max-w-lg p-12 m-auto border-2 border-gray-100 rounded-3xl">
            <div>
                <img src={encacap_logo} className="mx-auto w-14" alt="Encacap Logo" />
                <div className="text-center mt-7">
                    <div className="text-2xl font-semibold">Hi. Welcome back!</div>
                    <div className="mt-1">Login with your Encacap account.</div>
                </div>
                <form className="mt-12" onSubmit={handleLogin}>
                    {error && (
                        <div className="p-4 mb-4 text-sm font-semibold text-red-500 border-2 border-red-500 rounded-xl bg-red-50">
                            {error.message}
                        </div>
                    )}
                    <Input
                        type="email"
                        label="Username or email"
                        className="block"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={usernameError?.message || ""}
                        disabled={isSubmitting}
                    />
                    <Input
                        type="password"
                        label="Password"
                        className="block mt-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError?.message || ""}
                        disabled={isSubmitting}
                    />
                    <div className="mt-4">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!isAllowSubmit || isSubmitting}
                            isLoading={isSubmitting}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
