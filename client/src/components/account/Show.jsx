import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Navigation from "../../components/Navigation";

export default function Show() {
    const [show, setShow] = useState(false);
    const location = useParams();

    useEffect(() => {//後の挙動
        (
            axios
            .get("http://localhost:3001/api/v1/accounts/"+location.id)
            .then(res => {
                setShow(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
        )
    }, [])
    console.log(show.data)

    return(
        <div>
            <Navigation />
            <main style={{ padding: "1rem 0" }}>
                <h2>HelloReact</h2>
            </main>
            <table className="table table-striped table-sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Name</th>
						<th>Email</th>
						<th>電話</th>
					</tr>
				</thead>
				<tbody>
                    {show ?
                    <tr>
                        <td>{show.data.id}</td>
                        <td>{show.data.attributes.first_name}</td>
                        <td>{show.data.attributes.last_name}</td>
                        <td>{show.data.attributes.email}</td>
                        <td>{show.data.attributes.phone}</td>
                    </tr>
                    : ''
                    }
				</tbody>
			</table>
        </div>
    );
}