import React from "react";
import Cookies from 'js-cookie'; 
import { Link } from "react-router-dom";
import './Myprofile.css'


export default function Myprofile() {
    const userEmail = Cookies.get('userdata');
    let userInfo = null;

    if (userEmail) {
        const storedData = localStorage.getItem(userEmail);
        if (storedData) {
            userInfo = JSON.parse(storedData);
        }
    }

    return (
        <div className="profile-card">
            {userInfo ? (
                <div>
                    <h1>Welcome, {userInfo.name}!</h1>
                    <p>Employee Id:{userInfo.id}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Designation:{userInfo.Desgnation}</p>
                    <p>Phone:{userInfo.mobile}</p>
                    <p></p>
                    <p>Thank you !!!</p>
                </div>
            ) : (
                <p>User data not found.</p>
            )}

            <Link to="/Dashboard">Back to Dashboard</Link>
        </div>
    );
}
