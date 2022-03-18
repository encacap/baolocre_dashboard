import axiosInstance from "../common/axiosInstance";

const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post(
            `api/v1/auth/login`,
            {
                email,
                password,
            },
            {
                autoRefreshToken: true,
                notRedirectWhenError: true,
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { loginWithEmailAndPassword };
