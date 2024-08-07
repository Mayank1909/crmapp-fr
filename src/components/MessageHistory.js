import React from 'react'
import UpdateTicket from './UpdateTicket';

const MessageHistory = ({ msg }) => {

    if (!msg) return null;
    return msg.map((row, ind) => (


        <div className="message-history font-bold text-gray-600 mt-4">
            <div className={`flex items-start space-x-4 ${(ind % 2 === 0) ? 'flex-row-reverse' : ''}`}>
                <div className="flex flex-col">
                    <div className="sender text-sm font-medium text-gray-700 p-1">{row.sender}</div>
                    <div className="date text-xs text-gray-500 p-1">{row.msgAt && new Date(row.msgAt).toLocaleString()}</div>
                </div>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={row.message}
                    readOnly
                />
            </div>

        </div>
    ))


}

export default MessageHistory
