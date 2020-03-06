import { GET_TICKET, SEARCH_TICKET } from "../config/constants";
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

export const searchTicket = value => {
  const { destination, start, dateStart, qty } = value;
  return {
    type: SEARCH_TICKET,
    payload: async () => {
      const res = await API.get("/ticketSearch", {
        dateStart: `%${dateStart}%`,
        startStation: `%${start}%`,
        destinationStation: `%${destination}%`,
        qty: qty
      });
      const { data } = res.data;
      return data;
    }
  };
};
