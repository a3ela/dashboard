import React from "react";
import {
  AiFillHome,
  AiFillLock,
  AiFillSetting,
  AiFillMessage,
} from "react-icons/ai";
import { IoMdHelp } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
//style
import "./style/sidebar.css";
const Sidebar = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">logo</span>
            <span className="title">Logo Brand</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <AiFillHome />
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <BsFillPeopleFill />
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <AiFillMessage />
            </span>
            <span className="title">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <IoMdHelp />
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <AiFillSetting />
            </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <AiFillLock />
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <GoSignOut />
            </span>
            <span className="title">Sign out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
