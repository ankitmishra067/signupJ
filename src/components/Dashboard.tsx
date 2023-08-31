import React, { useState } from "react";
import Cookies from 'js-cookie'; 
import { Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return(
      <div className="dashboard">
          <div>
            <p>Dashboard</p>
          </div>
          <div>
            <Link to="/Myprofile"><h4 className="mprofile">my-profile</h4></Link>
          </div>
          
      </div>
      
  );
  
};

export default Dashboard;
