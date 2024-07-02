import { fetchUser } from "../APis/userApi.js";
import { getUserPending, getUserSuccess, getUserFail } from "./DashBoard.userSlice";

export const getUserProfile = () => async (dispatch) => {

    try {
        dispatch(getUserPending());
        const result = await fetchUser();
        // console.log(result)

        if (result && result._id) {
            return dispatch(getUserSuccess(result))
        }
        dispatch(getUserFail("User not found"));
    } catch (error) {
        dispatch(getUserFail(error))
    }

}