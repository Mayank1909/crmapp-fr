import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="bg-white shadow-md">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" class="text-2xl font-bold text-gray-800">CRM</a>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" class="text-gray-800 hover:text-gray-600">Dashboard</a>
                        <a href="#" class="text-gray-800 hover:text-gray-600">Tickets</a>
                        <a href="#" class="text-gray-800 hover:text-gray-600">logout</a>
                    </div>
                    <div class="relative">
                        <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1115 9.5a7.5 7.5 0 011.65 7.15z" />
                        </svg>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar
