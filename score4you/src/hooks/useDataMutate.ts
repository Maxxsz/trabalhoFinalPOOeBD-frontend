import axios, { AxiosPromise } from "axios";
import PlayerData from "./../interface/PlayerData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postData = async (data: PlayerData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/player", data);
  return response;
};

export default function usePlayerDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["player-data"]);
    },
  });

  return mutate;
}
