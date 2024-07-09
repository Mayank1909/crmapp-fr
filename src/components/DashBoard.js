import React, { useEffect } from 'react'
import TicketTable from './TicketTable'
import BreadCrump from './BreadCrump'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTickets } from './TicketAction'
import Spinner from './Spinner'


const DashBoard = () => {
    const dispatch = useDispatch();
    const { isLoading, tickets } = useSelector((state) => state.tickets);

    useEffect(() => {
        if (!tickets.length) {
            setTimeout(() => {
                dispatch(fetchAllTickets())
            }, 3000);
        }
    }, []);
    const pendingTickets = tickets.filter((row) => row.status !== "Closed");
    const totlatTickets = tickets.length;
    if (isLoading) return <Spinner />
    return (

        <div className='mb-2'>
            <BreadCrump page={"DashBoard"} />
            {
                isLoading ? (<Spinner />) :

                    <div className="text-center mt-24">
                        <div>
                            <button className="bg-blue-500 text-white px-10 py-6 rounded-lg text-3xl"><Link to="/add-ticket">Add new ticket</Link></button>
                        </div>
                        <div className='p-5 m-5'>
                            <p>Total tickets: {totlatTickets}</p>
                            <p>Pending tickets: {pendingTickets.length}</p>
                        </div>
                    </div>
            }
            <hr />
            <div className=' font-medium px-3 text-2xl '>
                Recently added Ticket
            </div>
            <hr />

            {isLoading ? (<Spinner />) : <TicketTable tickets={tickets} />}

        </div >


    )
}

export default DashBoard
