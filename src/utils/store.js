import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../components/TicketSlice.js";
const store = configureStore({
    reducer: {
        tickets: ticketsReducer,

    }
})

export default store;