import React, { useState } from "react";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import lightban from "./../../assets/Images/User Profile/lightban.svg";
import darkban from "./../../assets/Images/User Profile/darkban.svg";
import bin2 from "./../../assets/Images/User Profile/bin2.svg";
import { deleteUser, UnSuspendUser } from "../../api/axios";
import "./PopupMenu.css";

const PopupMenu = ({ ban, userId}) => {
  const [menu, setMenu] = useState();
  const [banState, setbanState] = useState(ban);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const apiCall = (id, e) => {
    e.preventDefault();
    deleteUser(id);
    console.log(userId);
  };

  const status = async (id, status, e) => {
    e.preventDefault();
    let res = await UnSuspendUser(id, status);
    if (res?.status === "OK") {
      setMenu(!menu);
    }
  };

  return (
    <>
      <img
        src={dots}
        alt=""
        className="dots"
       
      />
      {menu ? (
        <div className="menuPopup">
          <a
            href=""
            onClick={(e) => {
              apiCall(userId, e);
            }}
          >
            <p>Delete User</p> <img src={bin2} alt="" />
          </a>
          <hr className="popupLine" />
          {ban === "Suspended" ? (
            <a
              href=""
              onClick={(e) => {
                status(userId, "Unsuspend", e);
              }}
            >
              <p>Unsuspend</p> <img src={darkban} alt="" />
            </a>
          ) : (
            <a
              href=""
              onClick={(e) => {
                status(userId, "Suspend", e);
              }}
            >
              <p>Suspend</p> <img src={lightban} alt="" />
            </a>
          )}
        </div>
      ) : null}
    </>
  );
};

export default PopupMenu;
