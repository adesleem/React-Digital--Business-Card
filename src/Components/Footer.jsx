import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer({ footerIconStyling }) {
  const footerIconStyling = {
    fontSize: "1.5rem",
    color: "#918e9b",
    margin: "0.5rem",
  };

  return (
    <div className="footer">
      <div className="icons">
        <AiFillGithub style={footerIconStyling} />
        <FaTwitterSquare className="twitter" />
        <AiOutlineFacebook className="facebook" />
      </div>
    </div>
  );
}
