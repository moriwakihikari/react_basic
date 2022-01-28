import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom'


export default function Navigation() {

    const result = document.cookie.indexOf('login_token');
 
    if(result == -1) {
        return <Navigate to={'/sign-in'} />
    }
    return (
        <div>
            <h1>Hello CIN!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
                >
                <Link to="/">Home</Link> |{" "}
                <Link to="/count-up-down">count-up-down</Link> |{" "}
                <Link to="/sign-out">SignOut</Link>
            </nav>
        </div>
    );
}