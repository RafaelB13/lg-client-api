import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

interface ApiConfig {
    baseURL: string;
    defaultConfig?: AxiosRequestConfig;
}

interface ApiResponse<T> {
    data: T;
}

interface ApiErrorDetail {
    message: string;
    code: string;
}

interface ApiError {
    messageId?: string;
    timestamp?: string;
    error: ApiErrorDetail;
}

export class HttpClient {
    private axiosInstance: AxiosInstance;

    constructor(config: ApiConfig) {
        const { baseURL, defaulConfig } = config

        this.axiosInstance = axios.create({
            baseURL,
            ...defaulConfig
        });
    }

    async get<T extends any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance
            .get<T>(url, config)
            .then((response) => ({ data: response.data }))
            .catch((error) => {
                throw this.handleError(error);
            });
    }
    async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosInstance
            .post<T>(url, data, config)
            .then((response) => ({ data: response.data }))
            .catch((error) => {
                throw this.handleError(error);
            });
    }

    private handleError(error: any) {
        if (!axios.isAxiosError(error)) {
            return {
                message: "An unexpected error occurred",
                statusCode: 500,
            };
        }

        const apiError: ApiError = {
            messageId: error.response?.data?.messageId,
            timestamp: error.response?.data?.timestamp,
            error: {
                message: error.response?.data?.error.message || "An unexpected error occurred",
                code: error.response?.data?.error.code || "UNKNOWN_ERROR",
            },
        };

        return apiError;
    }
}