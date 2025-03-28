import React from "react";
import { Link } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const UserResult = ({ getData }) => {
  if (getData === undefined) return null;
  if (getData === null) {
    return (
      <h1 className="text-red-800 font-bold text-3xl text-center !mt-[50px]">
        Kullanıcı bulunamadı!
      </h1>
    );
  }
  return (
    <>
      <div className="w-[40%] !mx-auto !mt-10 flex justify-center select-none">
        <div>
          <img
            src={getData.avatar_url}
            alt=""
            className="w-60 rounded-full !mb-5"
          />
          <p className="text-white font-bold text-2xl">{getData.name}</p>
          <p className="text-[#8B949E] text-[20px] !mb-3">{getData.login}</p>
          <p className="text-white text-[17px]">{getData.bio}</p>
          <div className="flex items-center gap-1 text-white text-[14px] my-4">
            <IoMdPeople className="text-[#8B949E]" />
            <p>{getData.followers}</p>
            <p className="text-[#8B949E]">followers</p>
            <p>·</p>
            <p>{getData.following}</p>
            <p className="text-[#8B949E]">following</p>
          </div>

          <p className="text-white flex items-center gap-1 text-[14px]">
            <MdOutlineLocationOn className="text-[#8B949E]" />
            {getData.location}
          </p>
          <Link
            to={getData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#21262D] border-[#30363D] border-1 text-white !py-1 !px-5 !mt-5 block text-center text-[15px] rounded-md transition-all duration-300 hover:bg-[#30363D] hover:border-[#58A6FF] hover:text-[#58A6FF]"
          >
            Go to GitHub
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserResult;
