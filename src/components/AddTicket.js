import React, { useEffect, useState } from 'react'
import AddNewTicket from './AddNewTicket'
import BreadCrump from './BreadCrump'
import { shortText } from '../utils/validation';

const AddTicket = () => {

    // const [frmData, setFrmData] = useState(initialfrmData);
    // const [frmDataError, setFrmDataError] = useState(initialFrmError);



    // useEffect(() => { }, [frmData, frmDataError])
    // const handleOnChange = (e) => {
    //     const { name, value } = e.target;
    //     setFrmData({
    //         ...frmData,
    //         [name]: value,
    //     });
    //     // console.log(name, value)
    // }
    // const handleOnSubmit = async (e) => {
    //     e.preventDefault()
    //     setFrmDataError(initialFrmError);
    //     const isSubjectValid = await shortText(frmData.subject);

    //     setFrmDataError({
    //         ...initialFrmError,
    //         subject: !isSubjectValid,
    //     });
    //     console.log("form data submitted", frmData)
    // }


    return (
        <div>
            <BreadCrump page={"AddTiclet"} />
            <AddNewTicket />
        </div>
    )
}

export default AddTicket
