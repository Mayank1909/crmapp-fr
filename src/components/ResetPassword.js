import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ResetPassword = ({ handleOnChange, email, handleOnSubmit, frmSwitcher, handleOnResetSubmit }) => {



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
                    Submit
                </button>

                <Link to="/"><h1 className='font-bold text text-blue-300 p-2' onClick={() => frmSwitcher('login')}>Login Now</h1></Link>

            </form>

        </div>
    )
}

export default ResetPassword
