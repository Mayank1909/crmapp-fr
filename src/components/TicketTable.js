import React from 'react'

const TicketTable = ({ tickets }) => {
    return (
        <div>
            <div class="container mx-auto px-4 py-8">
                <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead class="bg-gray-200">
                        <tr className='text-center'>
                            <th class="py-2 px-4"> # </th>
                            <th class="py-2 px-4"> Subject </th>
                            <th class="py-2 px-4"> Status </th>
                            <th class="py-2 px-4"> Opened </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets.length ? (tickets.map(row =>
                                <tr class="bg-gray-100 text-center">
                                    <td class="py-2 px-4"> {row.id} </td>
                                    <td class="py-2 px-4">{row.subject}</td>
                                    <td class="py-2 px-4"> {row.status} </td>
                                    <td class="py-2 px-4">{row.addedat}</td>
                                </tr>
                            )) : (
                                <div className=' flex justify-center'>
                                    <td>no ticket to show</td>
                                </div>
                            )}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TicketTable
