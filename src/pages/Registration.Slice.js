import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: '',
    status: '',
    message: ''
}

const registrationSlice = createSlice({
    name: 'userRegistration',
    initialState,
    reducers: {
        registrationPending: (state) => {
            state.isLoading = true;
        },
        registrationSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.status = "success";
            state.error = payload;
        },
        registrationError: (state, { payload }) => {
            state.isLoading = false;
            state.status = "error";
            state.error = payload;
        },
    }
})
const { reducer, actions } = registrationSlice;

export const { registrationPending, registrationSuccess, registrationError } = actions;

export default reducer;