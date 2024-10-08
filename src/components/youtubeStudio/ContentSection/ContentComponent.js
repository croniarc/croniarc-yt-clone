import React, { useState } from "react";
import { ChannelCategoryItems } from "../../../static/Data";
import VideoTable from "./VideoTable";
import { useSelector } from "react-redux";
import SignInComponent from "../../helper/SignInComponent";

const ContentComponent = () => {
  const { user } = useSelector((state) => state.userInfo);

  const [activeInTopbar, setActiveInTopbar] = useState("Videos");
  const handleTopbarClick = (category) => {
    setActiveInTopbar(category);
  };

  return (
    <>
      <div className="flex flex-row h-[10%] pl-5 overflow-x-scroll scrollbar-hide border-b-[1px] border-[#3e3e3e]">
        {ChannelCategoryItems.map((item, i) => (
          <p
            className={`text-sm flex justify-start p-3 items-center cursor-pointer ${
              item === activeInTopbar
                ? `border-b-[3px] border-[#3ea6ff] text-[#3ea6ff]`
                : ``
            }`}
            onClick={() => handleTopbarClick(item)}
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="h-[83%] bg-[#282828]">
        {activeInTopbar === "Videos" ? (
          user ? (
            <VideoTable errorMsg={"You haven't published a video."} />
          ) : (
            <div className="flex items-center justify-center h-full ">
              <SignInComponent
                prefix={"Please"}
                postfix={`view ${activeInTopbar}`}
              >
                sign in
              </SignInComponent>
            </div>
          )
        ) : user ? (
          <div className="flex items-center justify-center h-full ">
            Coming Soon...{" "}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full ">
            <SignInComponent
              prefix={"Please"}
              postfix={`view ${activeInTopbar}`}
            >
              sign in
            </SignInComponent>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentComponent;
