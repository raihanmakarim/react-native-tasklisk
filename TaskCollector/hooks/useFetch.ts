import axios, {
  type AxiosError,
  type AxiosPromise,
  type AxiosRequestConfig,
} from "axios";

export type GeneralResponse<TResponse = unknown> = {
  code: "success" | "error";
  message: string;
  payload: TResponse;
};

export type GeneralErrorResponse = AxiosError<{ message?: string }>;

export type FetchConfig = AxiosRequestConfig;

const instance = axios.create({
  timeout: 1000 * 60 * 5, // 5 minutes
});

export const fetch = <T>(params: FetchConfig): AxiosPromise<T> => {
  // const baseURL = "http://10.0.2.2:3000/";
  const baseURL = "https://localhostq3:5602/";

  instance.defaults.baseURL = baseURL;
  instance.defaults.headers.common["Referrer-Policy"] = "no-referrer";

  return instance(params);
};

export default function useFetch<TResponse = unknown, TArgs = unknown>(
  fn: (args?: TArgs) => FetchConfig
) {
  return async (args?: TArgs) => {
    const config = fn(args);

    return fetch<GeneralResponse<TResponse>>({
      ...config,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          console.log(
            "Server responded with status code:",
            err.response.status
          );
          console.log("Response data:", err.response.data);
          console.log("Response headers:", err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.log("Request made but no response received:", err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error setting up the request:", err.message);
        }
        throw err;
      });
  };
}
