import axios from "axios";
// import cookieParser from "cookie-parser";

const rootUrl = "http://localhost:3001/v1";

const ticketUrl = rootUrl + "/ticket/";

const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(ticketUrl, {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT")
                },
            })
            resolve(result)
        } catch (error) {
            reject(error);
        }
    })
}


