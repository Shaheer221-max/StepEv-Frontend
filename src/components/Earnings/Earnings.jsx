import React, { useState, useEffect } from "react";
import "./Earnings.css";
import "./../Funds Processing/FundProcessing.css";
import Heading from "./../Reusable/Heading";
import SearchBox from "./../Reusable/SearchBox";
import filter from "./../../assets/Images/Dashboard/filter.svg";
import gross from "./../../assets/Images/Funding/gross.png";
import { appEarnings, date } from "../../api/axios";

const Earnings = () => {
  const [data, setData] = useState();
  const [metaData, setMetaData] = useState();

  const getData = async () => {
    let response = await appEarnings();
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Heading title="Earnings" />

      <div className="earningsSearchBox">
        <SearchBox />
        <div className="fundBtnFilter">
          <img src={filter} alt="" className="fundFilterImg" />
          <a href="/">All Records</a>
        </div>
      </div>

      <table className="fundsTable">
        <thead>
          <tr align="center">
            <th align="left">Order ID</th>
            <th align="left">User</th>
            <th>Date</th>
            <th>Total Amount </th>
            <th>App Earning </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr align="center">
            <td align="left" className="fundsUserId">
              #001
            </td>
            <td align="left" className="funds_name alignFundProfile">
              Shaheer Ahmed
            </td>
            <td className="funds_date">12 Oct, 2022</td>
            <td className="funds_price fundPriceAlign">
              <img src={gross} alt="" /> <p>2400</p>
            </td>
            <td className="funds_price">$360</td>
            <td>
              <div className="funds_action_release funds_action_btn">
                <p>Release</p>
              </div>
            </td>
          </tr> */}
          {data?.map((item, index) => (
            <tr align="center" key={index}>
              <td align="left" className="fundsUserId">
                #0{index}
              </td>
              <td align="left" className="funds_name alignFundProfile">
                <img
                  crossOrigin="anonymous"
                  src={`https://stepdev.up.railway.app/media/getImage/${item.userId.avatar}`}
                  alt=""
                />{" "}
                <p>{item.userId.name}</p>
              </td>
              <td className="funds_date">{date(item?.updatedAt)}</td>
              <td className="funds_price fundPriceAlign">
                <img src={gross} alt="" /> <p>2400</p>
              </td>
              <td className="funds_price">${item?.appEarning}</td>
              <td>
                <div className="funds_action_release funds_action_btn">
                  <p>View Order</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Earnings;
