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
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVlZTEzZTAxNDI2MDMxNTRlYjE2Y2EiLCJlbWFpbCI6Im1heWFuZHNkc2tAZS5jb20iLCJpYXQiOjE3MTk3NTYyODAsImV4cCI6MTcxOTg0MjY4MH0.t21AzsnapO6h2cg-iX0nBuEGlwqd84Ut07r6dy5p6Lk'
                },
            })
            resolve(result)
        } catch (error) {
            reject(error);
        }
    })
}


