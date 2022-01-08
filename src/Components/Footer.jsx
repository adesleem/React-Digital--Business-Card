import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <AiFillGithub className="github" />
        <FaTwitterSquare className="twitter" />
        <AiOutlineFacebook className="facebook" />
      </div>
    </div>
  );
}
