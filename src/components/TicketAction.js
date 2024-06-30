import { getAllTickets } from "../APis/ticketapi";
import {
    fetchTicketFail,
    fetchTicketLoading,
    fetchTicketSuccess,
    searchTickets
} from "./TicketSlice";




export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await getAllTickets();
        console.log(result);
        result.data.result.length &&
            dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
};

export const filterSearchTickets = (str) => async (dispatch) => {
    dispatch(searchTickets(str));
}