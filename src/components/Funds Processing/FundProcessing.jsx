import React, { useState, useEffect } from "react";
import "./FundProcessing.css";
import Heading from "./../Reusable/Heading";
import SearchBox from "../Reusable/SearchBox";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import gross from "./../../assets/Images/Funding/gross.png";
import picture from "./../../assets/Images/Funding/profile.png";
import Notification from "../Reusable/Notification";
import { getAllWithdrawlRequest, date, pausePayment } from "../../api/axios";

const FundProcessing = () => {
  const [data, setData] = useState();
  const [metaData, setMetaData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (count) => {
    let response = await getAllWithdrawlRequest(count, 10);
    console.log(response.data[0].metaData[0]);
    setData(response.data[0].data);
    setMetaData(response.data[0].metaData[0]);
  };

  const pause = (id) => {
    pausePayment(id);
    getData(currentPage);
  };
  useEffect(() => {
    getData(currentPage);
  }, []);
  return (
    <>
      <div className="fundsTitle">
        <Heading title="Funds Processing" />
        <Notification notification={5} />
      </div>
      {/* SearchBox */}
      <div className="fundSearchContainer">
        <div>
          <SearchBox />
        </div>
        <div className="fundBtnFilter">
          <img src={filter} alt="" className="fundFilterImg" />
          <a href="/">All Records</a>
        </div>
      </div>
      {/* Search Table */}
      <table className="fundsTable">
        <thead>
          <tr align="center">
            <th align="left">ID</th>
            <th align="left">User</th>
            <th>Date</th>
            <th>Amount Requested</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr align="center" key={index}>
              <td align="left" className="fundsUserId">
                #0{index}
              </td>
              <td align="left" className="funds_name alignFundProfile">
                <img
                  crossOrigin="anonymous"
                  src={`https://stepev-dev.up.railway.app/media/getImage/${item.avatar}`}
                  alt=""
                />{" "}
                <p>{item.userName}</p>
              </td>
              <td className="funds_date">{date(item.createdAt)}</td>
              <td className="funds_price fundPriceAlign">
                <img src={gross} alt="" /> <p>{item.amount}</p>
              </td>

              <td>
                {item.status === "Pending" ? (
                  <div className="funds_action_btns">
                    <div
                      className="funds_action_pause funds_action_btn"
                      onClick={() => {
                        pause(item._id);
                      }}
                    >
                      <p>Pause</p>
                    </div>

                    <div className="funds_action_release funds_action_btn">
                      <p>Release</p>
                    </div>
                  </div>
                ) : item.status === "Pause" ? (
                  <div className="funds_action_btns">
                    <div className="funds_released">
                      <p>Paused</p>
                    </div>

                    <div className="funds_action_release funds_action_btn">
                      <p>Release</p>
                    </div>
                  </div>
                ) : (
                  <div className="funds_released">
                    <p>Released</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {/*  */}
          {/* <tr align="center">
            <td align="left" className="fundsUserId">
              #000001
            </td>
            <td align="left" className="funds_name alignFundProfile">
              <img src={picture} alt="" /> <p>Shaheer Ahmed</p>
            </td>
            <td className="funds_date">17,Oct,2022</td>
            <td className="funds_price fundPriceAlign">
              <img src={gross} alt="" /> <p>2400</p>
            </td>

            <td>
              <div className="funds_action_btns">
                <div className="funds_action_pause funds_action_btn">
                  <p>Pause</p>
                </div>
                <div className="funds_action_release funds_action_btn">
                  <p>Release</p>
                </div>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default FundProcessing;
