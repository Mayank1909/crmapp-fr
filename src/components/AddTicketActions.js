import { createNewTicket } from "../APis/ticketapi";

import {
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail,
} from "./AddTicketSlice"


export const openNewTicket = (frmData) => (dispatch) => {


    return new Promise(async (resolve, reject) => {
        dispatch(openNewTicketPending())

        try {
            const result = await createNewTicket(frmData);
            if (result.status === "error") {
                return dispatch(openNewTicketFail(result.message));
            }
            dispatch(openNewTicketSuccess(result.message));

        } catch (error) {
            dispatch(openNewTicketFail(error));
        }
    })
}