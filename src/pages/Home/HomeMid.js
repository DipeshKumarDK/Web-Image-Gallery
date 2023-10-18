import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/vg1.jpg";
import { BiSearch } from "react-icons/bi";
import ImageCard from "../../components/ImageCard";
import { useSelector, useDispatch } from "react-redux";

function HomeMid() {

  const myMode = useSelector((state) => state.changeMode);

  const [images, setImages] = useState([])

  const mySearch = useRef();

  const fetchImages = async() => {
    try{
       const hi = fetch('https://api.unsplash.com/photos/?client_id=aaPWy3_sKEoa4a1MjBg9ZghAzPYXszr51am7R3TVbzQ').then((response) => response.json()) //2
       .then((res) => {
        setImages(res)
       });
    }catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const handleChange = async() => {
    try{
       const hi = fetch(`https://api.unsplash.com/search/photos/?client_id=aaPWy3_sKEoa4a1MjBg9ZghAzPYXszr51am7R3TVbzQ&query=${mySearch.current.value}`).then((response) => response.json()) //2
       .then((res) => {
        setImages(res?.results)
       });
    }catch(e){
        console.log(e)
    }
  }

  return (
    <div>
      <div
        className="h-[400px] flex flex-col justify-center px-[8px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <section className="flex justify-center">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white">
            Download High Quality Images By Creators
          </h2>
        </section>
        <section className="flex justify-center mt-[20px] text-slate-200">
          <h4 className="sm:text-base text-sm">
            Over 2.4 million+ stock images by out talented community
          </h4>
        </section>
        <section className="flex justify-center mt-[20px]">
          <div className="flex sm:w-2/3 w-full p-1 bg-slate-200 border-[1px] border-slate-300 shadow-inner rounded-md">
            <BiSearch className="h-[35px] w-[35px] p-[5px] bg-slate-200" />
            <input ref={mySearch} className="h-[35px] w-full outline-none bg-slate-200 p-1" onChange={handleChange}></input>
          </div>
        </section>
      </div>
      <div
        className={`lg:py-[40px] md:py-[40px] sm:py-[30px] py-[25px] lg:px-[50px] md:px-[40px] sm:px-[20px] px-[10px] ${
          myMode === "light" ? "bg-white" : "bg-[#0f0f0f]"
        }`}
      >
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[15px]">
          {images?.map((item)=>{
            return(
                <ImageCard image={item}/>
            )
          })}
        </section>
      </div>
    </div>
  );
}

export default HomeMid;
