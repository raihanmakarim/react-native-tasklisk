import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import useFetch from "./useFetch";
import { GeneralErrorResponse } from "./useFetch";

export type RequestPayload = {
  id: number;
  task: string;
};

export default function useMutationEditTask() {
  const queryClient = useQueryClient();
  const fetch = useFetch<Response, RequestPayload>((data) => ({
    url: "/tasks",
    method: "PUT",
    data,
  }));

  return useMutation(fetch, {
    onError: (error: GeneralErrorResponse) => {},
    onSuccess: (response) => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
