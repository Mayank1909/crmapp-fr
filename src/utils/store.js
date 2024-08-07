import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../components/TicketSlice.js";
import loginReducer from "../components/LoginSlice.js"
import userReducer from "../components/DashBoard.userSlice.js"
import newTicketReducer from "../components/AddTicketSlice.js"
import registrationReducer from "../pages/Registration.Slice.js"
import resetpassReducer from "../components/ResetPassSlice.js";
const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
        openticket: newTicketReducer,
        register: registrationReducer,
        resetpassword: resetpassReducer


    }
})

export default store;