import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeMode , changeCurrSearch } from "../actions/index"

function Navbar() {

  const dispatch = useDispatch();

  const searchEle = useRef()

  const myMode=useSelector((state)=> 
  state.changeMode
  );

  const navigate = useNavigate()

  const changeMyMode = () => {
    if(myMode === "light"){
    dispatch(changeMode("dark"))
    }else{
      dispatch(changeMode("light"))
    }
  }

  const SearchMyEle = () => {
    dispatch(changeCurrSearch(searchEle.current.value));
    navigate('/searchPage')
  }

  console.log(myMode)

  const cancel = () => {
     searchEle.current.value = "";
  }

  return (
    <div className={`py-[10px] xl:px-[80px] lg:px-[40px] px-[20px] flex justify-between border-b-[1px] ${myMode === 'light'?'text-black bg-white border-slate-400':'text-white bg-[#0f0f0f] border-slate-400'}`}>
      <div className="flex xl:gap-[70px] lg:gap-[40px] gap-[30px]">
        <div className="sm:flex hidden flex-col justify-center">
          <Link to="/" className="lg:text-2xl text-xl">
            Image Gallery
          </Link>
        </div>
        <section className="flex flex-row xl:gap-[30px] lg:gap-[20px] gap-[20px]">
          <div className={`flex w-full p-1 bg-slate-200 border-[1px] shadow-inner rounded-md ${myMode === 'light'?'text-black border-slate-300':'text-white bg-slate-900'}`}>
            <div className="cursor-pointer" onClick={SearchMyEle}>
              <BiSearch className={`h-[35px] w-[35px] p-[5px] ${myMode === 'light'?'text-black bg-slate-200':'text-white bg-slate-900'}`} />
            </div>
            <input ref={searchEle} className={`h-[35px] xl:w-[400px] lg:w-[300px] md:w-[300px] xs:w-full w-[150px] outline-none p-1 ${myMode === 'light'?'text-black bg-slate-200':'text-white bg-slate-900'}`}></input>
            <RxCross1 onClick={cancel} className={`h-[35px] w-[35px] cursor-pointer p-2 ${myMode === 'light'?'text-black bg-slate-200':'text-white bg-slate-900'}`} />
          </div>
          <div className="lg:flex flex-col hidden justify-center">
            <h3>Explore</h3>
          </div>
          <div className="lg:flex hidden flex-col justify-center">
            <h3>Collection</h3>
          </div>
        </section>
      </div>
      <section className="flex">
        <div className="sm:flex hidden flex-col justify-center">
          <h4>{myMode==='light'?'Light Mode':'Dark Mode'}</h4>
        </div>
        <div className="flex flex-col justify-center ml-3">
          <div className={`flex ${myMode === 'light'?'bg-slate-500':'bg-white'} p-1 rounded-full cursor-pointer`} onClick={changeMyMode}>
            <div className={`bg-white rounded-full h-[16px] w-[16px] ${myMode === 'light'?'bg-black':'bg-wite'}`}></div>
            <div className={`bg-slate-400 rounded-full h-[16px] w-[16px] ${myMode === 'dark'?'bg-black':'bg-slate-500'}`}></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
