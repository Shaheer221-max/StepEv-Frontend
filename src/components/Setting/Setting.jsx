import React, { useState } from "react";
import "./Setting.css";
import Heading from "./../Reusable/Heading";
import SettingItem from "./SettingItem";
import bank from "./../../assets/Images/Setting/bank.svg";
import edit from "./../../assets/Images/Setting/edit.svg";
import lock from "./../../assets/Images/Setting/lock.svg";
import notif from "./../../assets/Images/Setting/notif.svg";
import user from "./../../assets/Images/Setting/user.svg";
import close from "./../../assets/Images/close.png";
import { updatePassword } from "../../api/axios";

import SettingBox from "./SettingBox";
const Setting = () => {
  const [setting, setSetting] = useState(false);
  const handleClose = () => {
    setSetting(!setting);
  };

  return (
    <>
      <div className={setting ? "blur" : null}>
        <Heading title="Settings" />
        <hr className="settingLine" />
        <div className="settingSecurity">
          <div className="setting_heading_title">
            <Heading title="Security" />
          </div>
          <hr className="settingLine2" />
          <div onClick={handleClose}>
            <SettingItem icon={lock} title="Change Password" />
          </div>

          <hr className="settingLine2" />
          <SettingItem icon={user} title="Change Email/Username" />

          <div className="setting_heading_title">
            <Heading title="General" />
          </div>
          <hr className="settingLine2" />
          <SettingItem icon={notif} title="Notifications" />
          <hr className="settingLine2" />
          <SettingItem icon={edit} title="Change Profile Picture" />

          <div className="setting_heading_title">
            <Heading title="Payments" />
          </div>
          <hr className="settingLine2" />
          <SettingItem icon={bank} title="Bank Accounts" />
        </div>
      </div>

      {setting ? (
        <div className="modalbackdrop">
          <div className="dialog">
            <div className="settingBox">
              <div className="skillClose" onClick={() => handleClose()}>
                <img align="right" src={close} alt="Close btn" />
              </div>
              <SettingBox handleClose={handleClose} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Setting;
