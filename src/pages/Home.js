import React, { useState } from 'react'
import Login from '../components/Login'
import ResetPassword from '../components/ResetPassword';

const Home = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login')
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    const handleOnSubmit = (e) => {

        e.preventDefault()
        if (!email || !password) return alert("Please enter the required field")


        console.log(email, password)
    }
    const frmSwitcher = (frmType) => {
        setFrmLoad(frmType)
    }
    const handleOnResetSubmit = (e) => {
        e.preventDefault()
        if (!email) return alert("Please enter the email field")

        console.log(email);
    }
    return (
        <div className=' p-5 bg-blue-300 h-full mt-24'>
            {frmLoad === 'login' && <Login
                handleOnChange={handleOnChange}
                email={email}
                password={password}
                handleOnSubmit={handleOnSubmit}
                frmSwitcher={frmSwitcher}
            />}
            {frmLoad === 'reset' && <ResetPassword
                handleOnChange={handleOnChange}
                email={email}
                handleOnResetSubmit={handleOnResetSubmit}
                frmSwitcher={frmSwitcher}


            />}
        </div>
    )
}

export default Home
