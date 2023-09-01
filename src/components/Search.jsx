import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
export const Search = ({ setOpen, open }) => {
  return (
    <div className={`search ${open && "active"}`}>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="formSearch">
        <AiOutlineSearch className="iconSerach" />
        <input type="text" className="searchInp" placeholder="Axtar" />
        <button className="close" onClick={() => setOpen(false)}>
          <VscChromeClose className="icoClose" />
        </button>
      </div>
    </div>
  );
};
