import axiosInstance from "../common/axiosInstance";

const getUserData = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`api/v1/users/${userId}`, {
            autoRefreshToken: true,
            notRedirectWhenError: true,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getUserData };
