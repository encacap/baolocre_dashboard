import axiosInstance from "../common/axiosInstance";
import { AUTH as AUTH_PATHS } from "../constants/apiPaths";

const loginWithEmailAndPassword = async (email: string, password: string) => {
    const response = await axiosInstance.post(
        AUTH_PATHS.LOGIN,
        {
            email,
            password,
        },
        {
            autoRefreshToken: false,
            notRedirectWhenError: true,
        }
    );
    return response.data;
};

export { loginWithEmailAndPassword };
