import React, { useState, useEffect } from "react";
import "./Campaigns.css";
import Heading from "./../Reusable/Heading";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import SearchBox from "./../Reusable/SearchBox";
import campaignprofile from "./../../assets/Images/Campaign/campaignprofile.png";
import dot from "./../../assets/Images/Dashboard/dots.svg";
import { useNavigate } from "react-router-dom";
import { getCampaigns, date } from "../../api/axios";
import activeBtn from "./../../assets/Images/Pagination/activeBtn.svg";
import btn from "./../../assets/Images/Pagination/btn.svg";

const Campaigns = () => {
  const [data, setData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [metaData, setMetaData] = useState();

  const navigate = useNavigate();

  const handleNavigation = (campaignId, e) => {
    e.preventDefault();
    navigate("/campaigns/campaign", { state: { campaignId: campaignId } });
  };

  const callApi = async (count) => {
    var response_data = await getCampaigns(count, 10);
    console.log(Math.ceil(response_data.metaData[0].total / 10));
    setData(response_data.startups);
    setMetaData(response_data.metaData[0]);
    setTotalPage(Math.ceil(response_data.metaData[0].total / 10));
  };

  const handleNextPage = () => {
    let count = metaData.page + 1;
    callApi(count);
  };
  const handlePreviousPage = () => {
    let count = metaData.page - 1;
    callApi(count);
  };

  useEffect(() => {
    callApi(1);
  }, [data]);
  return (
    <>
      <Heading title="Campaigns" />
      <div className="campaignsHeader">
        <div>
          <SearchBox />
        </div>
        <div className="campaignsFilter">
          <img src={filter} alt="" className="filterImg" />
          <a href="/">All Campaigns</a>
        </div>
      </div>
      <div>
        <table className="campaignTable">
          <thead>
            <tr align="left">
              <th className="campaignTh">Name</th>
              <th>Date Created</th>
              <th>Admin</th>
              <th>Email</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="campaignTh">
                <div>
                  <img src={campaignprofile} alt="User" /> <p>Moto Mobiles</p>
                </div>
              </td>
              <td className="campaignDull campaignDate">20/08/2022</td>
              <td className="campaignAdmin">Shaheer Ahmed</td>
              <td className="campaignDull campaignEmail">Shaheer@gmail.com</td>
              <td>
                <div className="campaign_action_btns">
                  <div
                    className="campaign_action_btn1"
                    onClick={handleNavigation}
                  >
                    <p>View Campaign</p>
                  </div>
                  <div className="campaign_action_btn2">
                    <p>Approved</p>
                  </div>
                  <img src={dot} alt="More options" />
                </div>
              </td>
            </tr> */}
            {data?.map((item, index) => (
              <tr key={index}>
                <td className="campaignTh">
                  <div>
                    <img
                      Crossorigin="anonymous"
                      src={`https://stepdev.up.railway.app/media/getImage/${item.logo}`}
                      alt="User"
                    />{" "}
                    <p>{item.businessName}</p>
                  </div>
                </td>
                <h1>Testing 1</h1>
                <td className="campaignDull campaignDate">
                  {date(item.createdAt)}
                </td>
                <td className="campaignAdmin">{item.admin}</td>
                <td className="campaignDull campaignEmail">{item.email}</td>
                <td>
                  <div className="campaign_action_btns">
                    <div
                      className="campaign_action_btn1"
                      onClick={(e) => {
                        handleNavigation(item?._id, e);
                      }}
                    >
                      <p>View Campaign</p>
                    </div>
                    <div className="campaign_action_btn2">
                      <p>{item.status}</p>
                    </div>
                    <img src={dot} alt="More options" />
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
    </>
  );
};

export default Campaigns;
