import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../redux/actions/loginActions';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const loginData: any = useSelector((state: any) => state.login);
    const navigate: any = useNavigate();

    console.log("login selector", loginData);

    const loginHandler = async (e: any) => {
        e.preventDefault();
        await dispatch(loginRequest(loginInfo, onLoginSuccess));
        // console.log("check", loginData?.login);
        // if (loginData?.login?.statusCode === 200) {
        //     navigate('/');
        // }
    };

    const onLoginSuccess = () => {
        navigate('/');
    };

    const onLoginFailure = () => {

    };

    return (
        <>
            <div>Login</div>
            <form onSubmit={loginHandler}>
                <div>
                    <label>Email</label>
                    <input name="email" value={loginInfo.email} placeholder="email" onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" value={loginInfo.password} placeholder="password" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                </div>
                <button type="submit" style={{ color: 'white', backgroundColor: 'green' }}>{loginData?.loading ? 'Loading' : 'Login'}</button>
            </form>
        </>
    )
}

export default Login