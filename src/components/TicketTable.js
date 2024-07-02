import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const TicketTable = () => {

    const { searchTicketList, isLoading, error } = useSelector(
        (state) => state.tickets
    );
    if (isLoading) return <h3>Loading ...</h3>;
    if (error) return <h3>{error}</h3>;
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr className='text-center'>
                            <th className="py-2 px-4"> # </th>
                            <th className="py-2 px-4"> Subject </th>
                            <th className="py-2 px-4"> Status </th>
                            <th className="py-2 px-4"> Opened </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchTicketList.length ? (searchTicketList.map((row, index) =>
                                <tr className="bg-gray-100 text-center" key={index}>
                                    <td className="py-2 px-4"> {index + 1} </td>
                                    <td className="py-2 px-4 text-blue-400 underline"><Link to={`/ticket/${row}`}>{row.subject}</Link></td>
                                    <td className="py-2 px-4"> {row.status} </td>
                                    <td className="py-2 px-4">{row.openAt}</td>
                                </tr>
                            )) : (
                                <tr className=' flex justify-center'>
                                    <td>no ticket to show</td>
                                </tr>
                            )}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TicketTable
