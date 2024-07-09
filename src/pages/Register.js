import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { newUserRegistration } from './Register.action';
const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false,
};
const initialState = {
    name: '',
    email: '',
    password: '',
    company: '',
    address: '',
    phone: ''
};
const Register = () => {
    const [formData, setFormData] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);
    const { isLoading, status, message } = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const { name, phone, email, company, address, password } = formData;
        const newRegistration = {
            name,
            phone,
            email,
            company,
            address,
            password,
        };
        dispatch(newUserRegistration(newRegistration));
        console.log(formData);
    };
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-blue-300 m-3">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md m-2 mb-2">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder='Name'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='email'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder='company'
                                value={formData.company}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Phone
                            </label>
                            <input
                                type="Number"
                                id="phone"
                                name="phone"
                                placeholder='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder='Address'
                                rows={5}
                                value={formData.address}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='password'
                                value={formData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder='password'
                                value={formData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                            <span>
                                {!passwordError.confirmPass && (
                                    <div className="text-danger mb-3">Password doesn't match!</div>
                                )}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer"
                            // disabled={Object.values(passwordError).includes(false)}
                            >
                                Register
                            </button>
                            {isLoading && <Spinner />}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
