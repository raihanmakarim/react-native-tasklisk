import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import useFetch from "./useFetch";
import { GeneralErrorResponse } from "./useFetch";

export type RequestPayload = {
  id: number;
};

export type Response = {
  code: "success" | "failed";
  message: string;
};

export default function useMutationDeleteTask() {
  const queryClient = useQueryClient();
  const fetch = useFetch<Response, RequestPayload>((data) => ({
    url: "/tasks",
    method: "DELETE",
    data,
  }));

  return useMutation(fetch, {
    onError: (error: GeneralErrorResponse) => {},
    onSuccess: (response) => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
