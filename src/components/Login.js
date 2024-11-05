// // 


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import '../index.css';

// function Login() {

//     const history = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             await axios.post("http://localhost:8000/", {
//                 email,
//                 password
//             })
//             .then(res => {
//                 if (res.data === "exist") {
//                     history("/home", { state: { id: email } });
//                 }
//                 else if (res.data === "notexist") {
//                     alert("User has not signed up");
//                 }
//             })
//             .catch(e => {
//                 alert("Wrong details");
//                 console.log(e);
//             });

//         } catch (e) {
//             console.log(e);
//         }
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//                 <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

//                 {/* Wrapper div for submit button styling */}
//                 <div className="button-container">
//                     <button type="submit" onClick={submit}>Submit</button>
//                 </div>
//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/signup">Signup Page</Link>
//         </div>
//     );
// }

// export default Login;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../index.css';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } });
                    } else if (res.data === "notexist") {
                        alert("User has not signed up");
                    }
                })
                .catch(e => {
                    alert("Wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" onClick={submit} className="submit-button">Submit</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
