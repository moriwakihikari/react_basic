import { useEffect, useState } from 'react';
import Navigation from "../components/Navigation";
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";

export default function HelloReact() {
    const [users, setUsers] = useState([]);
    let geturl = 'http://localhost:3001/api/v1/accounts';

    const onclick = (e) => {
    e.preventDefault();
    // setId(user.id)
    }


    useEffect(() => {
		(
			// async () => {
			// 	const data = await axios.get(geturl)
            //     .then(res => {
            //         setUsers(res.data)
            //     })
			// }
            axios
            .get(geturl)
            .then(res => {
                setUsers(res.data.data)
                // console.log(res.data)
                // console.log(users)
                
            })
            .catch(err => console.log(err))
            
            // }
		)
	}, [])// 第二引数は第一引数に指定した関数の実行タイミングを決める
	      // 空を渡した場合、マウント・アンマウント時のみ第１引数の関数を実行
        //   console.dir(users, { depth: null });
        // console.log(users)
        console.log(localStorage);

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
						<th>first_Name</th>
						<th>last_Name</th>
						<th>Email</th>
						<th>詳細</th>
                        <th>削除</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? users.map((user => {
						return (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.attributes.first_name}</td>
                                <td>{user.attributes.last_name}</td>
								<td>{user.attributes.email}</td>
                                <td onClick={() => onclick}><Link to={"show/" + user.id}>詳細{user.id}</Link></td>
                                <td onClick={() => onclick}><Link to={"delete/" + user.id}>削除{user.id}</Link></td>
							</tr>
						)
					})
                    )
                    : ''
                    }
				</tbody>
			</table>
        </div>
    );
}