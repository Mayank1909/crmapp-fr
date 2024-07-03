import React, { useEffect, useState } from 'react'
import BreadCrump from '../components/BreadCrump'
import tickets from "../assets/data/dummy_data.json"
import MessageHistory from '../components/MessageHistory';
import UpdateTicket from '../components/UpdateTicket';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetResponseMsg } from '../components/TicketSlice';
import { closeTicket, fetchSingleTicket } from '../components/TicketAction';





const Ticket = () => {
    const { tId } = useParams()
    const dispatch = useDispatch();
    // const ticket = tickets[0];
    // const [message, setMessage] = useState('')
    // const [ticket, setTicket] = useState([]);
    const navigate = useNavigate();

    const {
        isLoading,
        error,
        selectedTicket,
        replyMsg,
        replyTicketError,
    } = useSelector(state => state.tickets);
    const handleOnClick = () => {
        dispatch(closeTicket(tId));
        // navigate('/dashboard');
    }

    useEffect(() => {
        dispatch(fetchSingleTicket(tId));

        return () => {
            (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
        };
    }, [tId, dispatch, replyMsg, replyTicketError])

    return (
        <div>
            <BreadCrump page={"Ticket"} />


            <div className="bg-white p-5 rounded shadow-md max-w-md mx-auto mt-5">
                <div className="flex justify-end">
                    <button
                        // onClick={onClose}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                        onClick={() => handleOnClick()}
                        disabled={selectedTicket.status === 'Closed'}

                    >
                        Close Ticket
                    </button>
                </div>
                {tId}
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Subject</label>
                        <p className="text-lg text-gray-900">{selectedTicket.subject}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <p className="text-lg text-gray-900">{selectedTicket.status}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Issue Date</label>
                        <p className="text-lg text-gray-900">{selectedTicket.openAt &&
                            new Date(selectedTicket.openAt).toLocaleString()}</p>
                    </div>
                </div>

                {selectedTicket.conversations && (
                    <MessageHistory msg={selectedTicket.conversations} />)
                }

                < UpdateTicket _id={tId}
                />
            </div>

        </div>
    )
}

export default Ticket
