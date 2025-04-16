import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {

  const [loginBtnName,setLoginBtnName]=useState("login");

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
            <li>Home</li>
            <li>About</li>
            <li>Kuchni</li>
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