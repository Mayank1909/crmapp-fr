import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-gray-800">CRM Ticketing</a>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Dashboard</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Tickets</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">logout</a>
                    </div>
                    <div className="relative">
                        <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1115 9.5a7.5 7.5 0 011.65 7.15z" />
                        </svg>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar
