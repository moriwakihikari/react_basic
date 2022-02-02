import { useEffect, useState } from 'react';
import Navigation from "../../components/Navigation";
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './UserSlice';
import { getLoginUser } from './LoginUserSlice';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';



const Account = (props) => {
    const count = useSelector((state) => state.counter.value);
    const { users } = useSelector((state) => state.users);
    const { login_user } = useSelector((state) => state.login_user);
    const [check, setCheck] = useState([])

    const dispatch = useDispatch(); //sliceを叩くAPIの様なもの

    useEffect(() => {
        dispatch(getLoginUser(localStorage.getItem('id')))
        dispatch(getUsers());
        
        setCheck('OK');
    
    }, []);

    if(!localStorage.getItem('id')){
        return <Navigate to={'/'} />
    }

    return(
        <div>
            <Navigation />
            <main style={{ padding: "1rem 0" }}>
                <h2>HelloReact</h2>
                <span>{count}</span>
                <h2>User</h2>
                {users && users.map((user, index) => <div key={index}>{user.name}</div>)}
                <h2>LoginUser</h2>
                <div>
                    {login_user.id ? (
                        <>
                            id:{login_user.id}<br></br>
                            first_name:{login_user.attributes.first_name}<br></br>
                            last_name:{login_user.attributes.last_name}<br></br>
                            email:{login_user.attributes.email}<br></br>
                            phone:{login_user.attributes.phone}
                        </>
                        ) : (
                        <>nothing</>
                    ) }
                </div>
            </main>
        </div>
    );
}
export default Account;
