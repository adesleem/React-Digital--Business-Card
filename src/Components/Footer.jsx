import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const footerIconStyles = { color: "#918e9b", fontSize: "2.5rem" };

export default function Footer({ footerIconStyles }) {
  return (
    <div className="footer">
      <div className="icons">
        <AiFillGithub style={footerIconStyles} />
        <FaTwitterSquare className="twitter" />
        <AiOutlineFacebook className="facebook" />
      </div>
    </div>
  );
}
