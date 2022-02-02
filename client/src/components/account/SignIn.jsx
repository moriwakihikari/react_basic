import React, { useState } from 'react';
import Navigation from "../../components/Navigation";
// import { useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './Slice'
import Account from "../../components/account/Account";
import { useSelector, useDispatch } from 'react-redux'



export default function SignIn() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const loginUrl = 'http://localhost:3001/api/v1/auth/sign_in'
	const [redirect, setRedirect] = useState(false)
	// const count = useSelector((state) => state.counter.value)
	// const dispatch = useDispatch()
	//2-6 idをaccountに渡してpropsで受け取るその値をsliceに渡すslice内でapi(get)叩くその値を持ってくる！！
	const [id, setId] = useState()
	const dispatch = useDispatch(); //sliceを叩くAPIの様なもの



    const submit = async (e) => {
		// formのデフォルトの挙動をキャンセル
		e.preventDefault()

		// ログイン情報を送信
		await axios.post(loginUrl, {
			email: email,
			password: password

			// withCredentials
			// リクエストに Cookie を添えて送信する
			// API側ではCookieにTokenを保存している
		// }, {withCredentials: true})
        })
		.then(res => {
		console.log(res.data.data.id);
		setId(res.data.data.id);
		// dispatch(getLoginUser(localStorage.getItem('id')))

		// dispatch(increment(res))//dispatchでsliceに渡せている様な？初期値に渡さないとリロードで消えるオブジェクトでSliceにどうか渡したい受け取り方の問題か
        })                      //恐らくslice内でstateの要領で変更させる。いやdispatch関数？を使用してslice内の関数を呼び出す


		//2-5localStorageで実装
        // .then(res => {
        //     console.log(res.data.data.email);
        //     localStorage.setItem('email', res.data.data.email);
        //     console.log(localStorage.getItem('email'));
        // })

		// リダイレクトフラグをTrue
		setRedirect(true)
	}

	if (redirect) {
        // window.location.href = '/';

        //強引にcookieに保存
        // const login_token = Math.random().toString(36);
        // document.cookie = "login_token=" + login_token;
        // console.log(document.cookie);
        // リダイレクトする

		//ページ遷移する且つ値が渡せない そもそもの根底が間違ってる気がしてきた
		//どこからでもstoreにアクセスして値を保持してもらえるということはここでid渡してstoreでAPIを叩いて値を保持することが出来ないとリロードしたら消えてしまう気がしてきた
        return <Account id={id}/>
		// return <Navigate to={"/account"} id={id} />
    }

    return(
        <div>
		    <Navigation />

            <form onSubmit={submit}>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
 
				<div className="form-floating">
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
						// 2. Emailをセット
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password"
						// 2. Passwordをセット
						onChange={e => setPassword(e.target.value)}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
 
				<button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
			</form>
            <Link to="/sign-up">SignUp</Link>
        </div>
    );
}