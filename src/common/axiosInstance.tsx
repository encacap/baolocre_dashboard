import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import * as redirectPath from "../constants/redirectPaths";
import { redirectTo } from "./helpers";
import storage from "./storage";

interface AxiosConfig extends AxiosRequestConfig {
    autoRefreshToken?: boolean;
    notRedirectWhenError?: boolean;
}

type HTTPMethodExcludeData = (url: string, config?: AxiosConfig) => Promise<any>;
type HTTPMethodIncludeData = (url: string, data?: any, config?: AxiosConfig) => Promise<any>;

interface Instance extends AxiosInstance {
    get: HTTPMethodExcludeData;
    post: HTTPMethodIncludeData;
    put: HTTPMethodIncludeData;
    path: HTTPMethodIncludeData;
}

const createAxiosInstance = () => {
    const tokens = storage.get("tokens");

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${tokens?.access?.token}`,
        },
    }) as Instance;

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const { response, config } = error;
            if (response) {
                const { status } = response;
                const { autoRefreshToken, notRedirectWhenError } = config;

                if (autoRefreshToken === true) {
                    if (status === 401) {
                        const { refresh: refreshToken } = tokens;
                        if (!refreshToken) {
                            return Promise.reject(error);
                        }
                        try {
                            const { data } = await axios.post(
                                "auth/refresh-tokens",
                                {
                                    refreshToken: storage.get("tokens").refresh.token,
                                },
                                {
                                    ...config,
                                    autoRefreshToken: false,
                                }
                            );
                            storage.set("tokens", data);
                            instance.defaults.headers.common.Authorization = `Bearer ${data.access.token}`;
                            config.headers.Authorization = `Bearer ${data.access.token}`;
                            return instance(config);
                        } catch (refreshError) {
                            return Promise.reject(refreshError);
                        }
                    }
                }

                if (notRedirectWhenError !== true) {
                    switch (status) {
                        case 401:
                            redirectTo(redirectPath.LOGIN_PATH);
                            break;

                        default:
                            redirectTo(redirectPath.SERVER_ERROR_PATH);
                            break;
                    }
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

const instance = createAxiosInstance();

export default instance;

