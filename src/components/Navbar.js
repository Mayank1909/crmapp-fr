import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../APis/userApi';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const { isLoading, error } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const logmeout = async () => {

        const result = await userLogout();
        if (result.message != "forbidden") {
            sessionStorage.removeItem("accessJWT");
            localStorage.removeItem("crmSite");
            setTimeout(() => {

                navigate('/')
            }, 3000);
        }

    }
    return (
        <div>
            {
                <nav className="bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800">CRM Ticketing</Link>
                        <div className="flex space-x-4">
                            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                            <Link to="/DashBoard" className="text-gray-800 hover:text-gray-600">Dashboard</Link>
                            <Link to="/tickets" className="text-gray-800 hover:text-gray-600">Tickets</Link>
                            <Link to="/" className="text-gray-800 hover:text-gray-600" onClick={() => logmeout()}>logout</Link>
                        </div>
                        <div className="relative">
                            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1115 9.5a7.5 7.5 0 011.65 7.15z" />
                            </svg>
                        </div>
                    </div>
                </nav>

            }

        </div>
    )
}

export default Navbar
