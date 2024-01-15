import axios, { AxiosPromise } from "axios";
import MatchData from "../interface/MatchData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<MatchData[]> => {
  const response = axios.get(API_URL + "/match");
  return response;
};

export default function useMatchData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["match-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
