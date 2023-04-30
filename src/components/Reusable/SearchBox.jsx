import React from "react";
import "./SearchBox.css";
import * as BsIcons from "react-icons/bs"
const SearchBox = ({search, placeholder, setSearch, Searchfunction}) => {
  return (
    <>
      <input
        className="searchUserBox"
        type="text"
        value={search}
        placeholder={placeholder}
        onChange={(text) => setSearch(text.target.value)}
      />
      <span onClick={() => Searchfunction(search)} className="searchIcon"><BsIcons.BsSearch /></span>
    </>
  );
};

export default SearchBox;
