import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from "../APis/ticketapi";
import {
    fetchTicketFail,
    fetchTicketLoading,
    fetchTicketSuccess,
    searchTickets,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
} from "./TicketSlice";





export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const result = await getAllTickets();
        console.log(result);
        result.data.result.length >= 0 &&
            dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
};

export const filterSearchTickets = (str) => async (dispatch) => {
    dispatch(searchTickets(str));
}

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
        const result = await getSingleTicket(_id);
        dispatch(
            fetchSingleTicketSuccess(
                result.data.result.length && result.data.result[0]
            )
        );
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
};

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
        const result = await updateTicketStatusClosed(_id);
        if (result.status === "error") {
            return dispatch(closeTicketFail(result.message));
        }

        dispatch(fetchSingleTicket(_id));

        dispatch(closeTicketSuccess("Status Updated successfully"));
    } catch (error) {
        console.log(error.message);
        dispatch(closeTicketFail(error.message));
    }
}

export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await updateReplyTicket(_id, msgObj);
        console.log(result);
        if (result.status === "error") {
            return dispatch(replyTicketFail(result.message));
        }

        dispatch(fetchSingleTicket(_id));

        dispatch(replyTicketSuccess(result.message));
    } catch (error) {
        console.log(error.message);
        dispatch(replyTicketFail(error.message));
    }
};

