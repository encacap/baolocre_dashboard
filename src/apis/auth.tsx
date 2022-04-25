import axiosInstance from "../common/axiosInstance";

const loginWithEmailAndPassword = async (email: string, password: string) => {
    const response = await axiosInstance.post(
        `api/v1/auth/login`,
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
