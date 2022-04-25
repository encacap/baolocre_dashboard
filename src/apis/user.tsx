import axiosInstance from "../common/axiosInstance";

const getUserData = async (userId: string) => {
    const response = await axiosInstance.get(`api/v1/users/${userId}`, {
        autoRefreshToken: true,
        notRedirectWhenError: true,
    });
    return response.data;
};

export { getUserData };
