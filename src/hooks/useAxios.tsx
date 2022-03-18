import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import axiosInstance from "../common/axiosInstance";

interface Config extends AxiosRequestConfig {
    autoRefreshToken?: boolean;
}

const useAxios = () => {
    const [response, setResponse] = useState<AxiosResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    const onSuccess = (response: AxiosResponse) => {
        setResponse(response);
        setLoading(false);
    };

    const onError = (error: Error) => {
        setError(error);
        setLoading(false);
    };

    const request = {
        get: async (url: string, config: Config) => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(url, config);
                onSuccess(response);
            } catch (error) {
                onError(error as Error);
            }
        },
    };

    return {
        request,
        response,
        error,
        loading,
    };
};

export default useAxios;
