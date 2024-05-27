import React, { useState } from 'react'
import BreadCrump from '../components/BreadCrump'
import tickets from "../assets/data/dummy_data.json"
import MessageHistory from '../components/MessageHistory';
import UpdateTicket from '../components/UpdateTicket';


const Ticket = () => {
    const ticket = tickets[0];
    const [message, setMessage] = useState('')
    const handleOnChange = (e) => {
        let value = e.target.value
        setMessage(value)
        console.log(value)

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        alert("form submitted")
    }
    return (
        <div>
            <BreadCrump page={"Ticket"} />


            <div className="bg-white p-5 rounded shadow-md max-w-md mx-auto mt-5">
                <div className="flex justify-end">
                    <button
                        // onClick={onClose}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    >
                        Close Ticket
                    </button>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Subject</label>
                        <p className="text-lg text-gray-900">{ticket.subject}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <p className="text-lg text-gray-900">{ticket.status}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Issue Date</label>
                        <p className="text-lg text-gray-900">{ticket.addedat}</p>
                    </div>
                </div>

                <MessageHistory msg={ticket.history} />

                < UpdateTicket message={message}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit} />
            </div>

        </div>
    )
}

export default Ticket
