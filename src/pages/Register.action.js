import { userRegistration } from "../APis/userApi";
import { registrationPending, registrationSuccess, registrationError } from "./Registration.Slice";

export const newUserRegistration = (frmDt) => async (dispatch) => {
    try {
        dispatch(registrationPending());

        const result = await userRegistration(frmDt);
        result.message === "New user created"
            ? dispatch(registrationSuccess(result.message))
            : dispatch(registrationError(result.message));

        //console.log(result);
    } catch (error) {
        dispatch(registrationError(error.message));
    }
};