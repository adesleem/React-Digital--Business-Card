import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import profile from "../images/card_avatar2.png";

export default function Info() {
  return (
    <div className="info">
      <div className="profile-box">
        <img src={profile} alt="Profile Picture" className="info-image" />
      </div>

      <h3>Oloyede Adeosun</h3>
      <p>Frontend Developer</p>
      <p className="website">
        {" "}
        <a href="http://" target="_blank">
          www.oloyedeadeosun.com
        </a>
      </p>
      <div className="buttons">
        <button className="email-button">
          <a href="mailto:"></a>
          <MdEmail />
          Email
        </button>
        <button className="linkedin-button">
          <a href=""></a> <FaLinkedin />
          Linkedin
        </button>
      </div>
    </div>
  );
}
