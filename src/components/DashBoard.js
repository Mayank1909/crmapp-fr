import React from 'react'
import TicketTable from './TicketTable'
import tickets from "../assets/data/dummy_data.json"
import BreadCrump from './BreadCrump'
const DashBoard = () => {
    return (
        <div className='mb-2'>
            <BreadCrump page={"DashBoard"} />

            <div className="text-center mt-24">
                <div>
                    <button className="bg-blue-500 text-white px-10 py-6 rounded-lg text-3xl">Add new ticket</button>
                </div>
                <div className='p-5 m-5'>
                    <p>Total tickets: 50</p>
                    <p>Pending tickets: 25</p>
                </div>
            </div>
            <hr />
            <div className=' font-medium px-3 text-2xl '>
                Recently added Ticket
            </div>
            <hr />
            <TicketTable tickets={tickets} />
        </div >
    )
}

export default DashBoard
