import React, { useState, useEffect } from "react";
import "./UserProfile.css";
// Reusable Components
import Heading from "./../Reusable/Heading";
import InfoTab from "../Reusable/InfoTab";
import UserCampaigns from "./UserCampaigns";
import UserEarnings from "./UserEarnings";

// Icons & Images
import profile from "./../../assets/Images/User Profile/profilepicture.png";
import bag from "./../../assets/Images/User Profile/bag.svg";
import calender from "./../../assets/Images/User Profile/calender.svg";
import location from "./../../assets/Images/User Profile/location.svg";
import call from "./../../assets/Images/User Profile/call.svg";
import gender from "./../../assets/Images/User Profile/user.svg";
import email from "./../../assets/Images/User Profile/email.svg";
import bin from "./../../assets/Images/User Profile/bin.svg";
import disable from "./../../assets/Images/User Profile/disable.svg";
import pack from "./../../assets/Images/User Profile/package.svg";
import earn from "./../../assets/Images/User Profile/earning.svg";
import warnblack from "./../../assets/Images/User Profile/warnblack.svg";
import suspendwhite from "./../../assets/Images/User Profile/suspendwhite.png";
import UserWarning from "./UserWarning";
import { freelancerProfile, UnSuspendUser, deleteUser } from "../../api/axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const stateData = useLocation();
  const [data, setData] = useState();
  const [earning, setEarning] = useState(false);
  const [warning, setWarning] = useState(false);
  const [campaigns, setCampaigns] = useState(true);
  const [freelancerId, setFreelancerId] = useState(
    stateData.state.freelancerId
  );
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [suspendError, setSuspendError] = useState(false);
  const [suspendErrorMsg, setSuspendErrorMsg] = useState(null);

  const apiCall = async () => {
    var response_data = await freelancerProfile(freelancerId);
    setData(response_data.data[0]);
  };
  useEffect(() => {
    // console.log(stateData.state.freelancerId);
    apiCall();
  }, []);
  const handleCampaign = () => {
    setCampaigns(true);
    setEarning(false);
    setWarning(false);
  };
  const handleEarning = () => {
    setCampaigns(false);
    setEarning(true);
    setWarning(false);
  };
  const handleWarning = () => {
    setCampaigns(false);
    setEarning(false);
    setWarning(true);
  };
  const handleSuspend = async (id, status, e) => {
    e.preventDefault();

    if (status === "Suspend") {
      let res = await UnSuspendUser(id, status);
      if (res?.status === "ERROR") {
        setSuspendError(true);
        setSuspendErrorMsg(res?.error?.name);
      }
      apiCall();
    } else {
      let res = await UnSuspendUser(id, status);
      if (res?.status === "ERROR") {
        setSuspendError(true);
        setSuspendErrorMsg(res?.error?.name);
      }
      apiCall();
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    let res = await deleteUser(freelancerId);
    if (res?.status === "OK") {
      navigate("/users");
    } else {
      setError(true);
      setErrorMsg(res?.error?.name);
    }
  };

  const date = (d) => {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <>
      {error ? <p className="error">Cannot delete user as {errorMsg}</p> : null}
      {suspendError ? (
        <p className="error">Cannot suspend user as {errorMsg}</p>
      ) : null}

      <Heading title="Freelancer Profile" />
      <div className="userProfileContainer">
        <div className="userProfilePicture">
          <img
            crossOrigin="anonymous"
            src={`https://stepdev.up.railway.app/media/getImage/${data?.avatar}`}
            alt="profile"
          />
        </div>
        <div className="dataUser">
          <div className="alignUserProfile">
            <div className="userName">
              <p className="userProfileName">{data?.name}</p>
              {data?.accountActive ? (
                <div className="activeIcon">
                  <p>Active</p>
                </div>
              ) : null}
            </div>
            <div className="userActionBtns">
              {data?.status === "Suspended" ? (
                <div
                  className="userActionBtn unsuspend"
                  onClick={(e) => {
                    handleSuspend(freelancerId, "Unsuspend", e);
                  }}
                >
                  <img
                    className="disableIcon"
                    src={suspendwhite}
                    alt="Disable"
                  />
                  <p className="unsuspend_p">Unsuspend</p>
                </div>
              ) : (
                <div
                  className="userActionBtn"
                  onClick={(e) => {
                    handleSuspend(freelancerId, "Suspend", e);
                  }}
                >
                  <img className="disableIcon" src={disable} alt="Disable" />
                  <p>Suspend</p>
                </div>
              )}
              <div
                className="userActionBtn"
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                <img className="binIcon" src={bin} alt="Delete" /> <p>Delete</p>
              </div>
            </div>
          </div>
          <div className="infoTabPadding">
            <InfoTab
              icon1={email}
              text1={data?.email}
              icon2={gender}
              text2={data?.gender}
            />
            <InfoTab
              icon1={call}
              text1={data?.phone}
              icon2={bag}
              text2={data?.jobTitle}
            />
            <div className="infoTabDate">
              <InfoTab
                icon1={location}
                text1={data?.city}
                icon2={calender}
                text2="21/Aug/2000"
              />

              <p>Joined {date(data?.joinedOn)}</p>
            </div>
          </div>
        </div>
      </div>
      <Heading title="More Options" />
      {/* Profile options */}
      <div className="moreOptionsAlign">
        <div onClick={handleCampaign} className="parentContainer">
          <div className={campaigns ? "moreOptions activee" : "moreOptions"}>
            <img src={pack} alt="campaigns" />
          </div>
          <p>Campaigns</p>
        </div>
        <div onClick={handleEarning} className="parentContainer">
          <div className={earning ? "moreOptions activee" : "moreOptions"}>
            <img src={earn} alt="Earnings" />
          </div>
          <p>Earnings</p>
        </div>
        <div onClick={handleWarning} className="parentContainer">
          <div className={warning ? "moreOptions activee" : "moreOptions"}>
            <img src={warnblack} alt="Warnings" />
          </div>
          <p>Warnings</p>
        </div>
      </div>
      <div className="campaignsContainer">
        {campaigns ? (
          <UserCampaigns freelancerId={freelancerId} />
        ) : earning ? (
          <UserEarnings freelancerId={freelancerId} />
        ) : (
          <UserWarning freelancerId={freelancerId} />
        )}
      </div>
    </>
  );
};

export default UserProfile;
