import { useQuery } from "@tanstack/react-query";

import useFetch from "./useFetch";
import { GeneralErrorResponse } from "./useFetch";

export type TasksResponse = {
  id: number;
  task: string;
};

const useQueryTasks = () => {
  const fetch = useFetch<TasksResponse[]>(() => ({
    method: "GET",
    url: "/tasks",
  }));

  return useQuery(["tasks"], fetch, {
    onSuccess: () => {
      console.log("Tasks fetched successfully");
    },
    onError: (err: GeneralErrorResponse) => {
      console.log("Error fetching tasks :", err);
    },
  });
};

export default useQueryTasks;
