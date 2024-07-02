import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../components/TicketSlice.js";
import loginReducer from "../components/LoginSlice.js"
import userReducer from "../components/DashBoard.userSlice.js"
const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,

    }
})

export default store;