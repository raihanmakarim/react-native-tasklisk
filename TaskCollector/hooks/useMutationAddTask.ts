import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import useFetch from "./useFetch";
import { GeneralErrorResponse } from "./useFetch";

export type RequestPayload = {
  task: string;
};

export type Response = {
  code: "success" | "failed";
  message: string;
};

export default function useMutationAddTask() {
  const queryClient = useQueryClient();
  const fetch = useFetch<Response, RequestPayload>((data) => ({
    url: "/tasks",
    method: "POST",
    data,
  }));

  return useMutation(fetch, {
    onError: (error: GeneralErrorResponse) => {},
    onSuccess: (response) => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
