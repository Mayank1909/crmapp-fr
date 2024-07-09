import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openNewTicket } from './AddTicketActions';
import { restSuccessMSg } from './AddTicketSlice';
import Alert from './Alert';
import Spinner from './Spinner';
import { Navigate, useNavigate } from 'react-router-dom';






const AddNewTicket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialFrmDt = {
        subject: "",
        issueDate: "",
        message: "",
    };
    const initialFrmError = {
        subject: false,
        issueDate: false,
        message: false,
    };
    const {
        user: { name },
    } = useSelector((state) => state.user);

    const { isLoading, error, successMsg } = useSelector((state) => state.openticket)


    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    console.log(frmData)
    useEffect(() => {
        return () => {
            successMsg && dispatch(restSuccessMSg());
        };
    }, [dispatch, frmData, frmDataError]);
    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFrmDataError(initialFrmError);

        // const isSubjectValid = await shortText(frmData.subject);

        setFrmDataError({
            ...initialFrmError,
            //   subject: !isSubjectValid,
        });

        dispatch(openNewTicket({ ...frmData, sender: name }));
        setTimeout(() => {
            navigate('/dashboard')
        }, 2000);
    };
    if (isLoading) return <Spinner />;
    return (
        <div>
            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg mt-3' autoComplete='off' onSubmit={handleOnSubmit}>
                <h1 className='text-4xl font-bold  text-center text-blue-400 p-2'>Issue Your ticket</h1>
                <div>
                    {error && <Alert variant="error" message={error}>{error}</Alert>}
                    {successMsg && <Alert variant="success" message={successMsg}>{successMsg}</Alert>}
                    {isLoading && <Spinner />}
                </div>
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
                        // value={frmData.issueDate}
                        onChange={handleOnChange}
                        required

                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="message"
                        id="message"
                        rows={5}
                        value={frmData.message}
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
