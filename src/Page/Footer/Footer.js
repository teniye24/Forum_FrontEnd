import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
          alt="logo"
        />
        <div className="icons2">
          <a>
            <FacebookIcon />
          </a>
          <a>
            <InstagramIcon />
          </a>
          <a>
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className="footer__mid">
        <h3>Useful Link</h3>
        <ul className="footer__midList">
          <li>How it Works</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer__right">
        <h3>Contact Info</h3>
        <ul className="footer__rightList">
          <li>Evangadi Networks</li>
          <li>Support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

// import React from 'react'
// import "./Footer.css"
// import logo from "../image/download.png"
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import "./Footer.css"
// function Footer() {
//   return (
//     <div>
//       <div className="footer-section">
//         <section className="footer">
//           <div className="footer-content">
//             <img src={logo} alt='/'/>
//             <br />
//             <div className="icons2">
//               <a>
//                 <FacebookIcon />
//               </a>
//               <a>
//                 <InstagramIcon />
//               </a>
//               <a>
//                 <YouTubeIcon />
//               </a>
//            </div>
// //           </div>
// //           <div className="footer-content">
// //             <h2>Useful Link</h2>
// //             <li>
// //               <a href="/">How it worke</a>
// //             </li>
// //             <li>
// //               <a href="/">Terms of service</a>
// //             </li>
// //             <li>
// //               <a href="/">Privacy Policy</a>
// //             </li>
// //           </div>
// //           <div className="footer-content">
// //             <h2>Contact Info</h2>
// //             <li>
// //               <a> Networks</a>
// //             </li>
// //             <li>
// //               <a>support@evangadi.com</a>{" "}
// //             </li>
// //             <li>
// //               <a>+1-202-386-2702</a>
// //             </li>
// //           </div>
// //         </section>
// //       </div>
//     </div>
//   );
// }

// export default Footer;
