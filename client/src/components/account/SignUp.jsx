//1.素のreact validateが上手く出来ず

// import Navigation from "../../components/Navigation";

// export default class SignUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             first_name: '',
//             last_name: '',
//             email: '',
//             phone: '',
//             password: '',
//             password_confirmation: '',
//             open: false,
//         };

//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         this.handleLastNameChange = this.handleLastNameChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handlePhoneChange = this.handlePhoneChange.bind(this);
//         this.handlePasswordChange = this.handlePasswordChange.bind(this);
//         this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);


//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit() {
//         this.setState({isSubmitted:true})
//     }

//     handleFirstNameChange(event) {
//         this.setState({value: event.target.firstNameValue});
//     }
//     handleLastNameChange(event) {
//         this.setState({value: event.target.lastNameValue});
//     }
//     handleEmailChange(event) {
//         this.setState({value: event.target.emailValue});
//     }
//     handlePhoneChange(event) {
//         this.setState({value: event.target.phoneValue});
//     }
//     handlePasswordChange(event) {
//         this.setState({value: event.target.passwordValue});
//     }
//     handlePasswordConfirmationChange(event) {
//         this.setState({value: event.target.passwordConfirmationValue});
//     }


//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.phoneValue);
//         event.preventDefault();
//       }

//     render() {
//         return (
//             <div>
//                 <Navigation />
//                 <main style={{ padding: "1rem 0" }}>
//                     <h2>SignUp</h2>
//                 </main>
//                 <form  onSubmit={()=>{this.handleSubmit()}} >
//                 <p>first_name</p>
//                 <input type="text" value={this.state.first_name} onChange={this.handleFirstNameChange}/>
//                 <p>last_name</p>
//                 <input type="text" value={this.state.last_name} onChange={this.handleLastNameChange}/>
//                 <p>email</p>
//                 <input type="email" value={this.state.emailValue} onChange={this.handleEmailChange}/>
//                 <p>phone</p>
//                 <input type="text" value={this.state.phone} onChange={this.handlePhoneChange}/>
//                 <p>password</p>
//                 <input type="password" value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
//                 <p>passwrod_confirmation</p>
//                 <input type="password" value={this.state.passwordConfirmationValue} onChange={this.handlePasswordConfirmationChange}/>

//                 <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         );
//     }
// }

// 2.react hooks validate出来ず
// import React, { useState } from 'react';
// import Navigation from "../../components/Navigation";
// import SignUpConfirmation from "../../components/account/SignUpConfirmation";

// function SignUp() {
//     const [first_name, setFirst_name] = useState('');
//     const [last_name, setLast_name] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const [password_confirmation, setPasswordConfirmation] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [error_first, setErrorFirst] = useState('');
//     const [formIsValid, setFormIsValid] = useState(false);

//     if(!{first_name}) {
//         {formIsValid = false};
//         {error_first = "Cannot be empty"};
//         console.log({error_first});
//     }
//     // document.addEventListener('DOMContentLoaded', () => {
//     //     const test = document.querySelector('#submit_btn');
//     //     test.addEventListener('click', event => {
//     //         const error_first = document.querySelector('#first_name');
//     //         const error_last = document.querySelector('#last_name');
//     //         const error_email = document.querySelector('#email');
//     //         const error_phone = document.querySelector('#phone');
//     //         const error_password = document.querySelector('#password');
//     //         const error_password_confirmation = document.querySelector('#password_confirmation');


//     //         if(error_first.value == ""){
//     //             message.push("氏名が未入力です");
//     //             alert(message);
//     //         }
//             // alert('click!');
//             // console.log("aaaaaa");
//         // });
//     // });


//     const ShowModal = () => {
//         setShowModal(true);
//       };
//         const handleSend = (e) => {
//         e.preventDefault();
//         // console.log(first_name, last_name, email, password, phone, password_confirmation);
//     };
//     return (
//         <div>
//             <Navigation />
//             <main style={{ padding: "1rem 0" }}>
//                 <h2>SignUp</h2>
//             </main>
//             <form  onSubmit={handleSend} >
//             <p>{first_name}</p>
//             <div>
//                 <p>first_name</p>
//                 <input type="text" id="first_name" name="first_name" onChange={(e) => setFirst_name(e.target.value)}/>
//             </div>
//             <div>
//                 <p>last_name</p>
//                 <input type="text" id="last_name" name="last_name" onChange={(e) => setLast_name(e.target.value)}/>
//             </div>
//             <div>
//                 <p>email</p>
//                 <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
//             </div>
//             <div>
//                 <p>phone</p>
//                 <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)}/>
//             </div>
//             <div>
//                 <p>password</p>
//                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
//             </div>
//             <div>
//                 <p>passwrod_confirmation</p>
//                 <input type="password" id="password_confirmation" name="password_confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
//             </div>

//             <input type="submit" id="submit_btn" onClick={ShowModal} value="Submit" />
//             </form>
//             <SignUpConfirmation showFlag={showModal} setShowModal={setShowModal} first_name={first_name} last_name={last_name} email={email} phone={phone} password={password} password_confirmation={password_confirmation} />
//         </div>
//     );
// }
// export default SignUp;

// 3.react-hook-form 使用
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { useForm } from "react-hook-form";
import SignUpConfirmation from "../../components/account/SignUpConfirmation";
import { Link } from "react-router-dom";

export default function SignUp() {
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(false);
    // const onSubmit = data => console.log(data);
    const ShowModal = data => {
        console.log(data);
        setShowModal(true);
    };

    const errorSubmit = 
    console.log(watch("example")); 

    return (
        <div>
            <main style={{ padding: "1rem 0" }}>
                <h2>SignUp</h2>
            </main>
            <form onSubmit={handleSubmit(ShowModal, errorSubmit)}>
                <label>first_name</label><br></br>
                <input {...register("firstName", { required: true})} /><br></br>
                {errors.firstName && "名前は必須項目です"}<br></br>
                <label>last_name</label><br></br>
                <input {...register("lastName", { required: true})} /><br></br>
                {errors.lastName && "名前は必須項目です"}<br></br>
                <label>email</label><br></br>
                <input type="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} /><br></br>
                {errors.email && "メールアドレスを入力してください"}<br></br>
                <label>phone</label><br></br>
                <input {...register("phone", { min: 10, required: true, pattern: /^[0-9]{10,11}/})} /><br></br>
                {errors.phone && "電話番号を入力してください"}<br></br>
                <label>password</label><br></br>
                <input type="password" {...register("password", { required: true, pattern: /^(?=.*?[a-z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{6,100}$/i })} /><br></br>
                {errors.password && "パスワードは必須項目です"}<br></br>
                <label>passwrod_confirmation</label><br></br>
                <input type="password" {...register("passwordConfirmation", { validate: value => value === getValues("password")})} /><br></br>
                {errors.passwordConfirmation && <span>パスワードが正しくありません</span>}<br></br>
                <input type="submit"/>
            </form>
            <Link to="/sign-in">SignIn</Link>
            {ShowModal &&//trueの時だけ入力内容確認画面を表示
            <SignUpConfirmation showFlag={showModal} setShowModal={setShowModal}
            values={getValues()}//getValues()でフォーム全体のデータを返してくれる！！
        />
      }
        </div>
    );
}
