import React, { useState, useEffect } from "react";
import "./Users.css";
import Heading from "./../Reusable/Heading";
import filterIcon from "./../../assets/Images/Dashboard/filter.svg";
import FormButton from "./../Reusable/FormButton";
import dots from "./../../assets/Images/Dashboard/dots.svg";
import Strikes from "../Reusable/Strikes";
import SuspendedSign from "../Reusable/SuspendedSign";
import SearchBox from "../Reusable/SearchBox";
import closeBtn from "./../../assets/Images/closeBtn.png";
import { useNavigate } from "react-router-dom";
import PopupMenu from "./PopupMenu";
// import { getUsers } from "../../api/axios";
import { getUsers, searchfreelancers } from "../../api/axios";
import activeBtn from "./../../assets/Images/Pagination/activeBtn.svg";
import btn from "./../../assets/Images/Pagination/btn.svg";

const Users = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const [metaData, setMetaData] = useState();
  const [render, setRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const getData = async (count) => {
    var response_data = await getUsers(count, 10);
    console.log(response_data);
    setData(response_data);
    setMetaData(response_data.metaData[0]);
    setTotalPage(Math.ceil(response_data.metaData[0].total / 10));
  };
const Searchfreelancers = async(keyword) => {
  var fdata = await searchfreelancers(keyword);
  var temp = {users:fdata.data}
  setData(temp)


}
  const handleNavigation = (freelancerId, e, status) => {
    e.preventDefault();
    navigate("/users/user-profile", {
      state: { freelancerId: freelancerId, status: status },
    });
  };
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };
  const handleNextPage = () => {
    let count = currentPage + 1;
    setCurrentPage(count);
    getData(count);
  };
  const handlePreviousPage = () => {
    let count = currentPage - 1;
    setCurrentPage(count);
    getData(count);
  };

  const handleInterval = () => {
    setRender(!render);
  };

  useEffect(() => {
    getData(currentPage);
  }, [render]);

  return (
    <>
      <div>
        <Heading title={"User"} />
      </div>
      <div className="userSearchContainer">
        <div>
          <SearchBox placeholder="Search user by name, email..." search={search} setSearch={setSearch} Searchfunction={Searchfreelancers}  />
        </div>
        
        <div
          className="btnFilter"
          onClick={(e) => {
            handleFilter(e);
          }}
        >
          <img src={filterIcon} alt="" className="filterImg" />
          <a href="/">All Users</a>
        </div>
      </div>
      {filter ? (
        <>
          <div className="filterBox">
            <div className="filterHeader">
              <p>Filters</p>
              <img
                src={closeBtn}
                alt="close"
                onClick={() => {
                  setFilter(false);
                }}
              />
            </div>
            <hr />
          </div>
        </>
      ) : null}
      <div>
        <table className="userTable">
          <thead>
            <tr className="thead">
              <th align="left">Name</th>
              <th align="left">Phone</th>
              <th align="left" className="emailTd">
                Email
              </th>
              <th align="left">Role</th>
              <th align="center">Action</th>
            </tr>
            {/* <div className="lineTable"></div> */}
          </thead>

          <tbody>
            {data.users?.map((user, index) => (
              <tr className="tbody" key={index}>
                <td className="firstTd">
                  {/* <div className="user_image"></div> */}
                  <img
                    crossOrigin="anonymous"
                    className="user_image"
                    src={`https://stepev-dev.up.railway.app/media/getImage/${user.avatar}`}
                    alt="User image"
                  />
                  {user.name}
                  {user.status == "Suspended" ? (
                    <SuspendedSign />
                   ): null}
                  {/* {user.warnings !== 0 ? (
                    <Strikes strike={user.warnings} />
                  ) : null} */}
                </td>
                <td className="Td">
                  {user.phoneNumber === undefined ? "N/A" : user.phoneNumber}
                </td>
                <td className="Td ">{user.email}</td>
                <td className="Td">
                  {user.role === undefined ? "N/A" : user.role}
                </td>
                <td align="center">
                  <div
                    onClick={(e) => {
                      handleNavigation(user?._id, e, user?.status);
                    }}
                  >
                    <FormButton title="View profile" />
                  </div>
                </td>
                <td align="center" onClick={handleInterval}>
                  <PopupMenu ban={user?.status} userId={user._id} />
                </td>
              </tr>
            ))}
            {/* <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed
                <SuspendedSign />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">Campaign</td>
              <td className="Td">Nike</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed
                <SuspendedSign />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">Abdullah Ahmed</td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">N/A</td>
              <td className="Td">N/A</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr>
            <tr className="tbody">
              <td className="firstTd">
                Abdullah Ahmed <Strikes strike={2} />
              </td>
              <td className="Td">03334353910</td>
              <td className="Td ">shaheer@gmail.com</td>
              <td className="Td">Campaign</td>
              <td className="Td">Nike</td>
              <td align="center">
                <div onClick={handleNavigation}>
                  <FormButton title="View profile" />
                </div>
              </td>
              <td align="center">
                <PopupMenu />
              </td>
            </tr> */}
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

export default Users;
