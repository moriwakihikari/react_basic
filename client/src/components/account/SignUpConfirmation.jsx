import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'


const SignUpConfirmation = (props) => {
    const setShowModal = props.setShowModal;
    const closeModal = () => {
        props.setShowModal(false);
    };
	const [redirect, setRedirect] = useState(false)

    const submit = event => {
        event.preventDefault();
        const data = {
            first_name: props.values.firstName,
            last_name: props.values.lastName,
            email: props.values.email,//UK,xx@xx.xx[数字]が通る(validate)....
            phone: props.values.phone,//UK
            password: props.values.password,
            password_confirmation: props.values.passwordConfirmation
        };
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
        axios.post("http://localhost:3001/api/v1/auth", data)
        .then(res => {
            //失敗分岐通らず、分かるようにしたい。とりあえず後ほど
            if(res.error){
                alert('通信に失敗しました');
            }
            console.log(res);
            console.log(res.error);
            console.log(res.data);
            setRedirect(true)
            });
    }

    if (redirect) {
        // Homeへリダイレクトする
		return <Navigate to={'/'} />
    }

    return (
      <>
        {props.showFlag ? (
            <div id="overlay">
                <div id="content">
                    <div id="modalContent">
                        <form onSubmit={submit}>
                            <label>first_name: {props.values.firstName}</label><br></br>
                            <input type="hidden" name="firstNamae" value={props.values.firstName}/>
                            <label>last_name: {props.values.lastName}</label><br></br>
                            <input type="hidden" name="lastNamae" value={props.values.lastName}/>
                            <label>email: {props.values.email}</label><br></br>
                            <input type="hidden" name="email" value={props.values.email}/>
                            <label>phone: {props.values.phone}</label><br></br>
                            <input type="hidden" name="phone" value={props.values.phone}/>
                            <input type="hidden" name="password" value={props.values.password}/>
                            <button onClick={closeModal}>閉じる</button>
                            <button type="submit">送信</button>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
        <></>
        )}
      </>
    );
  };
  
  export default SignUpConfirmation;