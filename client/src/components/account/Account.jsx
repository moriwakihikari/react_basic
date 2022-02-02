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
    const [check, setCheck] = useState()

    const dispatch = useDispatch(); //sliceを叩くAPIの様なもの
    const id = props.id;            //signinのIDを取得
    console.log(props);

    console.log(id);
    console.log(login_user);
    localStorage.setItem('id', id);
    console.log(localStorage);
    console.log(localStorage.getItem('id'));


    useEffect(() => {               //以前state使ってlogin.userの値をリアルに変更できたが、今回出来ないような...それに伴って値は最後入手してレンダリングしてくれない様な感じ無理矢理レンダリングするもしくはstateするか
        dispatch(getLoginUser(localStorage.getItem('id')))
        // dispatch(getUsers());
        axios.get("http://localhost:3001/api/v1/accounts/"+localStorage.getItem('id'))//無駄なAPIを叩いて力技どうしてもsliceの値をstateに保持する方法がわからず。返り値とかあるんですかね？
        
        .then(res => {
            setCheck(res.data)
        })
    
    }, []);

    if(localStorage.getItem('id') === 'undefined'){
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
                    {check ? (
                        <div>
                    id:{login_user.data.data.id}<br></br>
                    first_name:{login_user.data.data.attributes.first_name}<br></br>
                    last_name:{login_user.data.data.attributes.last_name}<br></br>
                    email:{login_user.data.data.attributes.email}<br></br>
                    phone:{login_user.data.data.attributes.phone}
                        </div>
                    ) : (
                        <>nothing</>
                    ) }
                </div>
            </main>
        </div>
    );
}
export default Account;
