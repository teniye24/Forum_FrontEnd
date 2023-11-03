import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../image/evangadi-logo-home.png";

function Header({ logout }) {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__navLeft">
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <div className="header__navRight">
          <Link to="/" className="Link">
            <li>Home</li>
          </Link>
          <li>How it Works</li>
          <li>
            <button onClick={logout} className="header__navBtn">
              {localStorage.getItem("auth-token") ? "LogOut" : "SIGN IN"}
            </button>
          </li>
        </div>
      </nav>
    </div>
  );
}

// function Header({ logout }) {
//   return (
//     <div className="header">
//       <nav className="header__nav">
//         <div className="header__navLeft">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="header__navRight">
//           <Link to="/home" className="Link">
//             <li>Home</li>
//           </Link>
//           <li>How it Works</li>
//           <li>
//             <button onClick={logout} className="header__navBtn">
//               {localStorage.getItem("auth-token") ? "LogOut" : "SIGN IN"}
//             </button>
//           </li>
//         </div>
//       </nav>
//     </div>
//     // <div>
//     //     <div className="header">
//     //   <Link to="/" className="logo"><img src={logo} alt="/"/></Link>
//     //   {/* <input type="checkbox" id="check"/> */}
//     //   <label for="check" className="icons" >
//     //   <i className='bx bx-menu' id="menu-icon" ></i>
//     //   <i className='bx bx-x'id="close-icon" ></i>
//     // </label>
//     //   <nav className="navbar">
//     //     <Link to="/" >Home</Link>
//     //     <Link to="/" >How it works</Link>
//     //    <Link to="/login" >
//     //     <button>Login </button>
//     //    </Link>
//     //   </nav>
//     // </div>
//     //     </div>
//   );
// }

export default Header;
