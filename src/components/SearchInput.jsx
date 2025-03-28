import React from "react";
import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [userName, setUserName] = useState("");
  const postUser = (e) => {
    if(e.key === "Enter"){
      onSearch(userName)
    }
  };

  return (
    <>
      <div className="w-full h-[100px] flex justify-center items-center bg-[#010409] border-b-2 border-[#30363D]">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={postUser}
          placeholder="Enter username"
          className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] border-1 border-[#30363D] outline-0 rounded-sm text-[#C9D1D9] !py-2 !px-3"
        />
      </div>
    </>
  );
};

export default SearchInput;
