import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./Resetpass.Action";


const initialState = {
    pin: "",
    password: "sfsd#3Dsg",
    confirmPass: "sfsd#3Dsg",
};

const OTPReset = () => {
    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState(initialState);

    const { isLoading, status, message, email } = useSelector(
        (state) => state.password
    );

    const handleOnChange = e => {
        const { name, value } = e.target;

        setNewPassword({ ...newPassword, [name]: value });
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        // console.log(newUser);

        const { pin, password } = newPassword;

        const newPassObj = {
            pin,
            newPassword: password,
            email,
        };
        dispatch(updatePassword(newPassObj));
    };



    return (
        <>
            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg' autoComplete='off' onSubmit={handleOnSubmit}>
                <div>
                    {isLoading && <Spinner />}
                </div>
                <h1 className='text-2xl font-bold  text-center'>Reset password:</h1>
                <div className="mb-4">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">OTP</label>
                    <input
                        type="number"
                        name='pin'
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newpassword.pin}
                        onChange={handleOnChange}
                        placeholder="OTP"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newpassword.password}
                        onChange={handleOnChange}
                        placeholder="password"


                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Confirm password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newpassword.conformpassword}
                        onChange={handleOnChange}
                        placeholder="confirm password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >

                    Submit
                </button>
            </form>
        </>
    )
}