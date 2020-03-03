import { GET_TICKET } from "../config/constants";
import { API } from "../config/api";

export const getTicket = () => {
  return {
    type: GET_TICKET,
    payload: async () => {
      const res = await API.get("/tickets");
      const { data } = res.data;
      return data;
    }
  };
};
