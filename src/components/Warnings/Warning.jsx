import React, { useState, useEffect } from "react";
import "./Warning.css";
import Heading from "./../Reusable/Heading";
import Notification from "./../Reusable/Notification";
import SearchBox from "../Reusable/SearchBox";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import warn from "./../../assets/Images/Warning/warning.svg";
import profile from "./../../assets/Images/Warning/profile.png";
import dots from "./../../assets/Images/Warning/dots.svg";
import { useNavigate } from "react-router-dom";
import { getAllWarnings, date, getImage } from "../../api/axios";
import activeBtn from "./../../assets/Images/Pagination/activeBtn.svg";
import btn from "./../../assets/Images/Pagination/btn.svg";
import close from "./../../assets/Images/close.png";

const Warnings = () => {
  const [data, setdata] = useState();
  const [totalPage, setTotalPage] = useState();
  const [metaData, setMetaData] = useState();
  const [reason, setReason] = useState(false);
  const [reasonInfo, setReasonInfo] = useState();
  const navigate = useNavigate();

  const apiCall = async (count) => {
    let response = await getAllWarnings(count, 10);
    console.log(response[0].metaData[0]);
    setdata(response[0].warnings);
    setMetaData(response[0].metaData[0]);
    setTotalPage(Math.ceil(response[0].metaData[0].total / 10));
  };

  const handleNavigation = () => {
    navigate("/team-removal");
  };

  const handleProfileNavigation = (freelancerId, e) => {
    e.preventDefault();
    navigate("/users/user-profile", { state: { freelancerId: freelancerId } });
  };

  const handleNextPage = () => {
    let count = data.metaData[0].page + 1;
    apiCall(count);
  };
  const handlePreviousPage = () => {
    let count = data.metaData[0].page - 1;
    apiCall(count);
  };

  const handleReason = (value) => {
    setReason(!reason);
    setReasonInfo(value);
  };

  useEffect(() => {
    apiCall(1);
  }, []);
  return (
    <>
      <div className={reason ? "handleBgBlur" : null}>
        <div className="warningHeader">
          <div className="warningTitle">
            <Heading title="Warnings" /> <Notification notification={5} />
          </div>
          <div className="removalRequest" onClick={handleNavigation}>
            <p>Removal Request</p>
          </div>
        </div>
        {/* Search Bar */}
        <div className="warningSearchContainer">
          <div>
            <SearchBox />
          </div>
          <div className="warningBtnFilter">
            <img src={filter} alt="" className="warningFilterImg" />
            <a href="/">All Users</a>
          </div>
        </div>
        {/* Warning Table */}
        <table className="warningTable">
          <thead>
            <tr align="center">
              <th align="left">Name</th>
              <th>Warned by</th>
              <th>Campaign</th>
              <th>Last Warning</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr align="center">
            <td align="left">
              <div className="warningUser">
                <img className="warningProfile" src={profile} alt="User" />
                <p className="warnUserName">Shaheer Ahmed</p>
                <div className="warningAlign">
                  <img src={warn} alt="Warning" className="warningWarn" />
                  <p className="warnAmount">2</p>
                </div>
              </div>
            </td>
            <td className="warningAdmin">Huzayfah Hanif</td>
            <td className="warningDetails">Moto</td>
            <td className="warningDetails">12,Oct,2022</td>
            <td>
              <div className="warningBtns">
                <div className="warning_btns_align">
                  <div className="warningBtn warningBtn1">
                    <p>View Profile</p>
                  </div>
                  <div className="warningBtn warningBtn2">
                    <p>Reason</p>
                  </div>
                </div>
                <img src={dots} alt="" className="warningMore" />
              </div>
            </td>
          </tr> */}
            {data?.map((item, index) => (
              <tr align="center" key={index}>
                <td align="left">
                  <div className="warningUser">
                    <img
                      crossorigin="anonymous"
                      className="warningProfile"
                      src={`https://stepev-dev.up.railway.app/media/getImage/${item.data.userAvatar}`}
                      alt="User"
                    />
                    <p className="warnUserName">{item.data.userName}</p>
                    <div className="warningAlign">
                      <img src={warn} alt="Warning" className="warningWarn" />
                      <p className="warnAmount">{item.totalWarnings}</p>
                    </div>
                  </div>
                </td>
                <td className="warningAdmin">{item.data.warnedByName}</td>
                <td className="warningDetails">
                  {item?.data.startup.businessName}
                </td>
                <td className="warningDetails">{date(item.data.warnedOn)}</td>
                <td>
                  <div className="warningBtns">
                    <div className="warning_btns_align">
                      <div
                        className="warningBtn warningBtn1"
                        onClick={(e) => {
                          handleProfileNavigation(item.data.userId, e);
                        }}
                      >
                        <p>View Profile</p>
                      </div>
                      <div
                        className="warningBtn warningBtn2"
                        onClick={() => {
                          handleReason(item.data.reason);
                        }}
                      >
                        <p>Reason</p>
                      </div>
                    </div>
                    <img src={dots} alt="" className="warningMore" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginationContainer">
          <img
            src={metaData?.page === 1 ? btn : activeBtn}
            alt="Previous"
            onClick={
              metaData?.page === 1
                ? null
                : () => {
                    handlePreviousPage();
                  }
            }
            className={metaData?.page === 1 ? null : "validBtn"}
          />
          <p className="currentPage">{metaData?.page}</p>
          <img
            src={metaData?.page === totalPage ? btn : activeBtn}
            alt="Next"
            onClick={
              metaData?.page === totalPage
                ? null
                : () => {
                    handleNextPage();
                  }
            }
            className={metaData?.page === totalPage ? "validBtn" : null}
          />
          <p className="totalPages">
            <span className="currentPageColor">Page {metaData?.page}</span> of{" "}
            {totalPage}
          </p>
        </div>
      </div>
      {reason && (
        <div className="suspendReason">
          <div className="skillClose" onClick={() => handleReason()}>
            <img align="right" src={close} alt="Close btn" />
          </div>
          <p>{reasonInfo}</p>
        </div>
      )}
    </>
  );
};

export default Warnings;
