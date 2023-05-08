import React, { useState } from "react";
import Heading from "../Reusable/Heading";
import "./SettingItem.css";
import { updatePassword } from "../../api/axios";
const SettingBox = ({handleClose}) => {
  const [oldpass, setOldPass] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const [emptyField, setEmptyField] = useState(false);
  const [equal, setEqual] = useState(false);
  const [length, setLength] = useState(false);

  const handleOldPassword = (event) => {
    setOldPass(event.target.value);
    setLength(false);
  };
  const handleNewPassword = (event) => {
    setNewPass(event.target.value);
  };
  const handleSubmit = async (newPass,oldPass) => {
    await updatePassword(newPass, oldPass)
  };

  return (
    <>
      <div className="skill_text textHeadingAlign">
        <Heading title="Change Password" />
      </div>
      <div className="skillAlign alignInputBox">
        <input
          type="password"
          className="addSkillBox"
          placeholder="Enter old Password"
          onChange={handleOldPassword}
          value={oldpass}
        />
      </div>
      <div className="skillAlign">
        <input
          type="password"
          className="addSkillBox"
          placeholder="Enter new password"
          onChange={handleNewPassword}
          value={newPass}
        />
      </div>
      {length ? (
        <p className="settingWarning">Password length must be greater then 6</p>
      ) : null}
      {emptyField ? (
        <p className="settingWarning">Field cannot be empty</p>
      ) : null}
      {equal ? (
        <p className="settingWarning">
          New password should be equal to confirm password
        </p>
      ) : null}

      <div className="skillBtns changeBtns">
        <div onClick={() => handleClose()} className="cancelSkillBtn skillBtn">Cancel</div>
        <div className="cancelAddBtn skillBtn" onClick={() => {
          handleSubmit(newPass,oldpass)
          handleClose()
          }}>
          <p>Change</p>
        </div>
      </div>
    </>
  );
};

export default SettingBox;
