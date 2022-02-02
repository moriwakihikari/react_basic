import React, { useState } from 'react';
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";

export default function SignOut() {
    // document.cookie = "login_token=; max-age=0";
    // localStorage.removeItem("email");
    return(
        <div>
            <Navigation />
            <main style={{ padding: "1rem 0" }}>
                <h2>LogOutしました</h2>
                <Link to="/sign-in">SignIn</Link>
            </main>
        </div>
    );
}