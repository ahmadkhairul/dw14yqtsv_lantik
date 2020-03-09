import { GET_STATION } from "../config/constants";
import { API } from "../config/api";

export const getStation = () => {
  return {
    type: GET_STATION,
    payload: async () => {
      const res = await API.get("/stations");
      const { data } = res.data;
      return data;
    }
  };
};
