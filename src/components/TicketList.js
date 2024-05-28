import React, { useEffect, useState } from 'react'
import BreadCrump from './BreadCrump'
import tickets from "../assets/data/dummy_data.json"
import TicketTable from './TicketTable';
import { Link } from 'react-router-dom';


const TicketList = () => {
    const [str, setstr] = useState('');
    const [dispTicket, setDispTiclet] = useState(tickets);
    useEffect(() => { }, [str, dispTicket])

    const handleOnChange = (e) => {
        const { value } = e.target
        setstr(value);
        // console.log(e.target.value);
        searchTicket(value)

    }
    const searchTicket = (sttr) => {
        const dispaytickets = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase()))
        setDispTiclet(dispaytickets);
    }

    return (
        <div>
            <BreadCrump page={"TicketList"} />


            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        <Link to="/add-ticket"> Add New Ticket</Link>
                    </button>
                    <form className="flex items-center space-x-2">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                            onChange={handleOnChange}
                            value={str}

                        />
                    </form>
                </div>
            </div>

            <TicketTable tickets={dispTicket} />

        </div>
    )
}

export default TicketList
