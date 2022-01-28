import React, { useState } from 'react';
import Navigation from "../../components/Navigation";
// import { useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom'

export default function SignIn() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const loginUrl = 'http://localhost:3001/api/v1/auth/sign_in'
	const [redirect, setRedirect] = useState(false)

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
		}, {withCredentials: true})
        // })

		// リダイレクトフラグをTrue
		setRedirect(true)
	}

	if (redirect) {
        // window.location.href = '/';

        //強引にcookieに保存
        const login_token = Math.random().toString(36);
        document.cookie = "login_token=" + login_token;
        console.log(document.cookie);
        // Homeへリダイレクトする
        return <Navigate to={'/'} />
    }

    return(
        <div>
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