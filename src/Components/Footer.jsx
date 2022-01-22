import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <AiFillGithub
          color=" #918e9b"
          font-size="1.5rem"
          margin="margin: 8px;"
        />
        <FaTwitterSquare className="twitter" />
        <AiOutlineFacebook className="facebook" />
      </div>
    </div>
  );
}
