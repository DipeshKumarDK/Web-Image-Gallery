import React, { useState } from "react";
import pic from "../assets/vg1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { BiLike } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

function ImageCard(image) {
  const myMode = useSelector((state) => state.changeMode);
  const [modal2, setModal2] = useState("N");

  const changeYes = () => {
    setModal2("Y");
  };

  const changeNo = () => {
    setModal2("N");
  };

  return (
    <div>
      <div className="border-[1px] border-slate-300 rounded-md">
        <img
          src={`${image?.image?.urls?.full}`}
          alt=""
          className="md:max-h-[380px] md:min-h-[300px] max-h-[250px] min-h-[200px] w-full rounded-t-md cursor-pointer"
          onClick={changeYes}
        />
        <div
          className={`flex justify-between px-3 py-4 cursor-pointer ${
            myMode === "light" ? "bg-white" : "bg-slate-800"
          }`}
          onClick={changeYes}
        >
          <div className="flex gap-[10px]">
            <div className="flex flex-col justify-center">
              <img
                src={image?.image?.user?.profile_image?.small}
                className="h-[40px] w-[40px] rounded-full"
                alt=""
              />
            </div>
            <div
              className={`flex flex-col justify-center ${
                myMode === "light" ? "text-black" : "text-slate-100"
              }`}
            >
              <h3 className="text-sm font-semibold">
                {image?.image?.user?.username}
              </h3>
              <h4
                className={`text-sm font-semibold ${
                  myMode === "light" ? "text-slate-600" : "text-slate-300"
                }`}
              >
                @{image?.image?.user?.id}
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-[6px]">
              <div className="flex flex-col justify-center">
                <BiLike
                  className={`h-5 w-5 ${
                    myMode === "light" ? "text-black" : "text-slate-100"
                  }`}
                />
              </div>
              <div
                className={`flex flex-col justify-center ${
                  myMode === "light" ? "text-black" : "text-slate-100"
                }`}
              >
                <h5>{image?.image?.likes}</h5>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            modal2 === "N" ? "hidden" : ""
          } flex flex-col bg-[rgba(0,0,0,0.8)] min-h-screen w-full justify-center border-[2px] border-slate-300 shadow-lg pt-2 pb-2 pl-3 pr-3 rounded-md relative transition duration-3000 ease-in-out`}
          style={{ position: "fixed", top: "0px", left: "0px", zIndex: '1' }}
        >
          <div className={`flex justify-center h-full `}>
            <div
              className={`lg:w-1/2 md:w-3/4 w-full p-4 shadow-lg border-[2px] border-gray-600 rounded ${myMode === 'light'?'bg-white':'bg-slate-900'}`}
              style={{ position: "relative" }}
            >
              <div
                className="p-1 bg-white border-[1px] border-slate-400 rounded-full"
                style={{ position: "absolute", top: "-12px", right: "-12px" }}
              >
                <RxCross1
                  className="h-4 w-4 cursor-pointer"
                  onClick={changeNo}
                />
              </div>
              <div className="flex justify-center">
                <img src={pic} className="lg:h-[400px] md:h-[300px] h-[250px] w-full" alt="image" />
              </div>
              <div className={`mt-2 ${myMode === 'light'?'text-black':'text-white'}`}>
                <div className="font-semibold text-center">{image?.image?.alt_description?.toUpperCase()}</div>
                <div className="text-sm mt-1 text-center">{image?.image?.description}</div>
                <div className="mt-3 flex sm:flex-row flex-col justify-between font-semibold">
                  <h3 className="sm:text-left text-center">Username: {image?.image?.user?.username}</h3>
                  <h3 className="sm:text-left text-center">Portfolio: {image?.image?.user?.social?.portfolio_url}</h3>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div
                  onClick={changeYes}
                  className="text-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-green-600 rounded text-white mr-2"
                >
                  Likes: {image?.image?.likes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
