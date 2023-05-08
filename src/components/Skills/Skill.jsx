import React, { useState, useEffect } from "react";
import "./Skill.css";
import Heading from "./../Reusable/Heading";
import Notification from "../Reusable/Notification";
import SearchBox from "./../Reusable/SearchBox";
import AddSkill from "./AddSkill";
import close from "./../../assets/Images/close.png";
import {
  viewSkills,
  deleteSkill,
  addSkill,
  updateSkill,
  date,
} from "../../api/axios";

const Skill = () => {
  const [skill, setSkill] = useState(false);
  const [updateSkill, setUpdateSkill] = useState(false);
  const [skillID, setSkillId] = useState();
  const [data, setData] = useState();
  const [handleValue, setHandleValue] = useState();
  const [state, setState] = useState(false);

  const apiCall = async () => {
    var response_data = await viewSkills();
    setData(response_data);
  };
  const handleSkill = () => {
    setSkill(!skill);
    setState(!state);
  };

  const handleUpdate = () => {
    setUpdateSkill(!updateSkill);
    setState(!state);
  };
  const handleUpdateSkill = (value, id) => {
    setHandleValue(value);
    setSkillId(id);
    setUpdateSkill(!updateSkill);
    setState(!state);
    apiCall();
  };

  const handleDeleteSkill = (value, id) => {
    setHandleValue(value);
    setSkillId(id);
    deleteSkill(value, id);
    apiCall();
    setState(!state);
  };

  useEffect(() => {
    apiCall();

    console.log(data);
  }, [state]);

  return (
    <>
      <div className={skill ? "blur" : updateSkill ? "blur" : null}>
        <div className="skillHeader ">
          <Heading title="Skills" />
          <div onClick={() => handleSkill()} className="skill_add_btn">
            <Notification notification={"Add"} />
          </div>
        </div>
        <div className="skillSearch">
          <SearchBox />
        </div>
        <table className="skillsTable">
          <thead>
            <tr align="center">
              <th align="left">Name</th>
              <th>Created On</th>
              <th>Total Freelancers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr align="center">
              <td align="left" className="skillName">
                <p>Wordpress Development</p>
              </td>
              <td className="skillDate">12,oct,2022</td>
              <td className="totalFreelancers">2000</td>
              <td className="skillsBtns">
                <div className="skillDeleteBtn">
                  <p>Delete</p>
                </div>
                <div className="skillEditBtn" onClick={() => handleSkill()}>
                  <p>Edit</p>
                </div>
              </td>
            </tr> */}
            {data?.map((item, index) => (
              <tr align="center" key={index}>
                <td align="left" className="skillName">
                  <p>{item?.title}</p>
                </td>
                <td className="skillDate">{date(item?.createdAt)}</td>
                <td className="totalFreelancers">{item?.count}</td>
                <td className="skillsBtns">
                  <div
                    className="skillDeleteBtn"
                    onClick={() => {
                      handleDeleteSkill(item?.title, item?.skillId);
                    }}
                  >
                    <p>Delete</p>
                  </div>
                  <div
                    className="skillEditBtn"
                    onClick={() =>
                      handleUpdateSkill(item?.title, item?.skillId)
                    }
                  >
                    <p>Edit</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {skill ? (
        <div className="add_skill">
          <div
            className="skillClose"
            onClick={() => {
              handleSkill();
            }}
          >
            <img align="right" src={close} alt="Close btn" />
          </div>
          <AddSkill
            title="Adding skill"
            holder="Add skill"
            btnValue="Add"
            funCall={true}
            handleSkill={handleSkill}
            apiCall={apiCall}
          />
        </div>
      ) : null}

      {updateSkill ? (
        <div className="add_skill">
          <div className="skillClose" onClick={() => handleUpdate()}>
            <img align="right" src={close} alt="Close btn" />
          </div>
          <AddSkill
            title="Updating skill"
            holder={handleValue}
            btnValue="Update"
            funCall={false}
            id={skillID}
            handleSkill={handleUpdate}
          />
        </div>
      ) : null}
    </>
  );
};

export default Skill;
