import axios from "axios";
// import cookieParser from "cookie-parser";

const rootUrl = "http://localhost:3001/v1";

const ticketUrl = rootUrl + "/ticket/";

const closeTicketUrl = rootUrl + "/ticket/close-ticket/";

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
export const getSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(ticketUrl + _id,

                {
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
export const updateReplyTicket = (_id, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.put(ticketUrl + _id, msgObj, {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT"),
                },
            });

            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
};


export const updateTicketStatusClosed = (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch(
                closeTicketUrl + _id,
                {},
                {
                    headers: {
                        Authorization: sessionStorage.getItem("accessJWT"),
                    },
                }
            );
            console.log(result);
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    });
};

export const createNewTicket = (frmData) => {

    return new Promise(async (resolve, reject) => {
        try {

            const result = await axios.post(ticketUrl, frmData, {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT")
                },
            })

            resolve(result.data);

        } catch (error) {
            reject(error)
        }
    })
}

