import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchNewAccessJWT } from '../APis/userApi'
import { loginSuccess } from '../components/LoginSlice'
import { getUserProfile } from '../components/DashBoard.userAction'


const isAuth = true


const PrivateRoute = ({ children }) => {

    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.login);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        const updateAccessJWT = async () => {
            const result = await fetchNewAccessJWT();
            result && dispatch(loginSuccess());
        };

        !user._id && dispatch(getUserProfile());

        !sessionStorage.getItem("accessJWT") &&
            localStorage.getItem("crmSite") &&
            updateAccessJWT();

        !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
    }, [dispatch, isAuth, user._id]);

    return (
        isAuth ? children : <Navigate to="/" />
    )

}

export default PrivateRoute
