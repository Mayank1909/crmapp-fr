import React from 'react'

const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
    return (
        <div>
            <form className="p-2 m-2" onSubmit={handleOnSubmit} autoComplete='off'>
                <div className="mb-3">
                    <label htmlFor="text" className="block text-sm text-gray-700 mb-2 font-bold">Reply</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="details"
                        id="details"
                        rows={3}
                        value={message}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className='text-right'>
                    <button className=' bg-blue-400 font-bold text-white rounded-md p-1 '>Reply</button>
                </div>

            </form>

        </div>
    )
}

export default UpdateTicket
