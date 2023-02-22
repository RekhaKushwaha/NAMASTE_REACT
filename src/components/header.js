import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const logo = (
  <a href="/">
    <div>
      <img
        className="logo"
        src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg"
        alt="Food Villa"
      />
    </div>
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  console.log("render()");
  return (
    <div className="headerContainer">
      {logo}
       <h1>{title}</h1>
       <button onClick={()=> setTitle("Resturant App")}>Change title</button> 
      <div className="nav-items">
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About us</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? <button onClick={() =>{setIsLoggedIn(false)}}>Login</button> : <button onClick={() => {setIsLoggedIn(true)}}>Logout</button>}
    </div>
  );
};

export default Header;
