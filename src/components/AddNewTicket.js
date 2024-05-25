import React from 'react'

const AddNewTicket = ({ handleOnSubmit, handleOnChange, frmData, frmDataError }) => {
    console.log(frmData)
    return (
        <div>
            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg mt-3' autoComplete='off' onSubmit={handleOnSubmit}>
                <h1 className='text-4xl font-bold  text-center text-blue-400 p-2'>Issue Your ticket</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="subject"
                        onChange={handleOnChange}
                        maxLength={100}
                        value={frmData.subject}
                        required
                    />
                    <label className='text-red-400 font-medium'>{frmDataError.subject && "Subject is required"}</label>
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">Issue found At</label>
                    <input
                        name="issueDate"
                        type="date"
                        id="issueDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={frmData.issueDate}
                        onChange={handleOnChange}
                        required

                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="details"
                        id="details"
                        rows={5}
                        value={frmData.details}
                        onChange={handleOnChange}
                        required

                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Open Ticket
                </button>
            </form>

        </div>
    )
}

export default AddNewTicket
