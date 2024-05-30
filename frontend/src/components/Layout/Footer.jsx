import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      {/* //</footer> <footer className={isAuthorized ? "footerHide" : "footerShow"}> */}
      <div>&copy; All Rights Reserved By Gulson kumar Ram</div>
      <div>
        <Link to={"#"} target="_blank">
          <FaFacebook />
        </Link>
        <Link to={"#"} target="_blank">
          <FaYoutube />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/gulson-kumar-ram-5b693a227/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/kumar__kcb"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
