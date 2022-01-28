import React from 'react';
import { Link, Outlet } from "react-router-dom";
import SignIn from "../components/account/SignIn";

export default function Navigation(props) {
    //login_token無ければログイン画面に遷移
    // const result = document.cookie.indexOf('login_token');
 
    // if(result == -1) {
    //     return <Navigate to={'/sign-in'} />
    // }
    return (
        <div>
            <h1>Hello CIN!   {localStorage.getItem('email')}</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
                >
                <Link to="/">Home</Link> |{" "}
                <Link to="/count-up-down">count-up-down</Link> |{" "}
                <Link to="/sign-up">SignUp</Link> |{" "}
                <Link to="/sign-in">SignIn</Link> |{" "}
                <Link to="/sign-out">SignOut</Link>
            </nav>
        </div>
    );
}