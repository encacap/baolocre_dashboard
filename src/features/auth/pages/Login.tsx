import { useEffect } from "react";
import encacap_logo from "../../../assets/images/encacap_logo.svg";
import { setDocumentTitle } from "../../../common/helpers";

const Login = () => {
    useEffect(() => {
        setDocumentTitle("Login");
    }, []);

    return (
        <div className="w-full max-w-lg p-12 m-auto border-2 border-gray-100 rounded-3xl">
            <div>
                <img src={encacap_logo} className="mx-auto w-14" alt="Encacap Logo" />
                <div className="text-center mt-7">
                    <div className="text-2xl font-semibold">Hi. Welcome back!</div>
                    <div className="mt-1">Login with your Encacap account.</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
