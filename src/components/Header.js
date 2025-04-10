import {LOGO_URL} from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;