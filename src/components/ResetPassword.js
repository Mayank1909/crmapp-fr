import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { sendPasswordResetOtp } from './Resetpass.Action';


const ResetPassword = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const { isLoading, status, message } = useSelector((state) => state.resetpassword);

    const handleOnResetSubmit = e => {
        e.preventDefault();

        dispatch(sendPasswordResetOtp(email));
    };

    const handleOnChange = e => {
        const { value } = e.target;
        setEmail(value);
    };

    return (
        <div className=''>

            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg' autoComplete='off' onSubmit={handleOnResetSubmit}>
                <h1 className='text-2xl font-bold  text-center'>Reset password:</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="email"
                        value={email}
                        onChange={handleOnChange}

                        name="email"
                        aria-describedby="emailHelp"

                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"

                >
                    <Link to="/">Submit</Link>

                </button>

                <Link to="/"><h1 className='font-bold text text-blue-300 p-2'>Login Now</h1></Link>

            </form>

        </div>
    )
}

export default ResetPassword
