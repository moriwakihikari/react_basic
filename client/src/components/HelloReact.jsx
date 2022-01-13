import React from 'react';
import Navigation from "../components/Navigation";

export default function HelloReact() {
    return(
        <div>
            <Navigation />
            <main style={{ padding: "1rem 0" }}>
                <h2>HelloReact</h2>
            </main>
        </div>
    );
}