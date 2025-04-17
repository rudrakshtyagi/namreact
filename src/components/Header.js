import { useState,useEffect } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [loginBtnName,setLoginBtnName]=useState("login");

  useEffect(()=>{
console.log("hekjoejriejfks");

});

    return (
      <div className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
  
        <div className="navi">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <button className="loginbtn" onClick={()=>{
              
              loginBtnName ==="login" ? setLoginBtnName("logout") : setLoginBtnName("login");
            }}>{loginBtnName}</button>
          
          </ul>
        </div>
      </div>
    );
  };

  export default Header;