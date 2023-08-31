import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Myprofile.css';

function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [Designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const validationReg = async () => {
    const data = {
      id: id,
      name: name,
      Designation: Designation,
      email: email,
      password: password,
      mobile: mobile
    }
    if (!name || !email || !password) {
      alert("Fill all the required fields");
    } else {
      try {
        const response = await axios.post("http://localhost:3001/api/Signup", data)
        console.log(response.data.message);

      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="profile-card">
      <div className="form">
        <h1>SignUp</h1>
        
        <input type="text" onChange={(e) => setId(e.target.value)} placeholder="Employee Id" required />
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" onChange={(e) => setDesignation(e.target.value)} placeholder="Designation" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
        <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" required /><br />
        <button className="button" type="submit" onClick={validationReg}>Register</button>

        <div className="link-button">
          <p>If Account exists, then</p><Link className='link' to='/'><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
