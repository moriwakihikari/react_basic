import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function Navigation() {
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
                <Link to="/count-up-down">count-up-down</Link>
            </nav>
        </div>
    );
}