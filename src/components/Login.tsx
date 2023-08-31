import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emaillog, password: passwordlog }),
            });

            if (response.ok) {
                const data = await response.json();
                const userEmail = data.userEmail;

                // Set user data in cookies or session as needed
                Cookies.set('userdata', userEmail);

                // Navigate to the dashboard
                navigate("/Dashboard", { state: { userEmail } });
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid email or password.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form>
            <div className='profile-card'>
                <img src="C:\Users\AnkitKumarMishra\Desktop\signup\main.png" alt="" />
                <h2>Sign In</h2>
                <div>
                    <input type="email" placeholder='Email' className='fill' onChange={(event) => setEmaillog(event.target.value)} />
                </div>
                <div className='second-input'>
                    <input type="password" placeholder='Password' className='fill' onChange={(event) => setPasswordlog(event.target.value)} />
                </div>
                {error && <div className="error">{error}</div>}
                <div className="lower-btn">
                    <div className='login-btn btn'>
                        <button onClick={handleLogin}>Sign IN</button>
                    </div>
                    <div className='reg-link btn'>                    
                        <Link className='link' to='/Signup'>
                            <button className="signupbtn">Sign UP</button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
