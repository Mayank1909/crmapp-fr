import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loginPending, loginSuccess, loginFail } from "./LoginSlice.js"
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from "../APis/userApi.js"
import { useNavigate, useLocation } from "react-router-dom";
import { getUserProfile } from './DashBoard.userAction.js';
import Spinner from './Spinner.js';
import Alert from './Alert.js';





const Login = ({ frmSwitcher }) => {
    const [email, setEmail] = useState("mayandsdsk@e.com");
    const [password, setPassword] = useState("password");

    const { isLoading, isAuth, error } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        sessionStorage.getItem("accessJWT") && navigate("/dashBoard")
    }, [dispatch])

    const handleOnChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            default:
                break;
        }
    };
    const handleOnSubmit = async e => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up all the form!");
        }

        dispatch(loginPending());


        try {
            const isAuth = await userLogin({ email, password });

            if (isAuth.status === "error") {
                return dispatch(loginFail(isAuth.message));
            }
            setTimeout(() => {
                dispatch(loginSuccess());
                dispatch(getUserProfile());
                navigate("/dashboard");
            }, 3000);

        } catch (error) {
            dispatch(loginFail(error.message));
        }
    };




    return (
        <div className=''>


            <form className='max-w-md mx-auto bg-white p-8 rounded shadow-lg' autoComplete='off' onSubmit={handleOnSubmit}>
                {error !== "" && <Alert variant="error" message={error} />}
                <h1 className='text-2xl font-bold  text-center'>Login:</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleOnChange}

                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="password"
                        onChange={handleOnChange}
                        value={password}
                        name="password"

                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"

                >
                    Submit
                </button>
                {isLoading ? (
                    <Spinner />
                ) :

                    <Link to='/'><h1 className='font-bold text text-blue-300 p-2' onClick={() => frmSwitcher('reset')}>forget password ?</h1></Link>
                }

            </form>

        </div>
    )
}

export default Login
