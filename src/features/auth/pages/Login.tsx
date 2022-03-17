import { useEffect, useState } from "react";
import encacap_logo from "../../../assets/images/encacap_logo.svg";
import { setDocumentTitle } from "../../../common/helpers";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                <form className="mt-12">
                    <Input
                        type="email"
                        label="Username or Email"
                        className="block"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        label="Password"
                        className="block mt-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="mt-4">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
