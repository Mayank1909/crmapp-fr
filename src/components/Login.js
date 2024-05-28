import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = ({ handleOnChange, email, password, handleOnSubmit, frmSwitcher }) => {




    return (
        <div className=''>

            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg' autoComplete='off' onSubmit={handleOnSubmit}>
                <h1 className='text-2xl font-bold  text-center'>Login:</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="email"
                        value={email}
                        onChange={handleOnChange}
                        onSubmit={handleOnSubmit}
                        name="email"
                        aria-describedby="emailHelp"

                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="password"
                        value={password}
                        onChange={handleOnChange}
                        onSubmit={handleOnSubmit}
                        name="password"

                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onSubmit={handleOnSubmit}
                >
                    Submit
                </button>

                <Link to='/'><h1 className='font-bold text text-blue-300 p-2' onClick={() => frmSwitcher('reset')}>forget password ?</h1></Link>

            </form>

        </div>
    )
}

export default Login
