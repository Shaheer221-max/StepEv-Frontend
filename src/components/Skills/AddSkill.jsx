import React, { useState } from "react";
import "./AddSkill.css";
import Heading from "./../Reusable/Heading";
import { addSkill, updateSkill } from "../../api/axios";

const AddSkill = ({ title, holder,apiCall, btnValue, funCall, id,handleSkill }) => {
  const [skillTitle, setSkillTitle] = useState();
  const [skillId, setSkillId] = useState(id);

  const handleAdd = (event) => {
    setSkillTitle(event.target.value);
  };
  const add = () => {
    if (funCall === true) {
      addSkill(skillTitle);
    } else {
      setSkillId(id);
      updateSkill(skillTitle, skillId);
    }
    // alert(skillTitle, "successfully added as a new skill");
    setSkillTitle(" ");
  };
  return (
    <div>
      <div className="skill_text">
        <Heading title={title} />
      </div>
      <div className="skillAlign">
        <input
          type="text"
          className="addSkillBox"
          placeholder={holder}
          onChange={handleAdd}
          value={skillTitle}
        />
      </div>
      <div className="skillBtns">
        <div onClick={() => handleSkill()} className="cancelSkillBtn skillBtn">Cancel</div>
        <div
          className="cancelAddBtn skillBtn"
          onClick={() => {
            add();
            handleSkill();
            apiCall();
          }}
        >
          <p>{btnValue}</p>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
