import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Navigation from "../../components/Navigation";

export default function Delete() {
    const location = useParams();

        axios
        .delete("http://localhost:3001/api/v1/accounts/"+location.id)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))

    return(
        <div>
            <Navigation />
            <main style={{ padding: "1rem 0" }}>
                <h2>削除しました</h2>
            </main>
        </div>
    );
}