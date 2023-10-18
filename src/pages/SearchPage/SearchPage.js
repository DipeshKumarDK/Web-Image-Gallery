import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "../../components/ImageCard";

function SearchPage() {

    const myMode = useSelector((state) => state.changeMode);

    const mySearch = useSelector((state) => state.changeCurrSearch);

    const [images, setImages] = useState([])

    const fetchImages = async() => {
      try{
         const hi = fetch(`https://api.unsplash.com/search/photos/?client_id=aaPWy3_sKEoa4a1MjBg9ZghAzPYXszr51am7R3TVbzQ&query=${mySearch}`).then((response) => response.json()) //2
         .then((res) => {
          setImages(res?.results)
         });
      }catch(e){
          console.log(e)
      }
    }

    useEffect(() => {
      fetchImages()
    }, [])

  return (
    <div className="">
      <Navbar />
      <section className={`lg:py-[40px] md:py-[40px] sm:py-[30px] py-[25px] lg:px-[50px] md:px-[40px] sm:px-[20px] px-[10px] ${myMode === 'light'?'bg-white':'bg-[#0f0f0f]'}`}>
        <h3 className={`text-2xl font-semibold ${myMode === 'light'?'text-black':'text-slate-100'}`}>{mySearch}</h3>
        <div className={`h-[5px] w-[60px] mt-3 rounded-md ${myMode === 'light'?'bg-slate-500':'bg-slate-300'}`}></div>
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[15px] mt-[30px]">
          {images?.map((item)=>{
            return(
                <ImageCard image={item}/>
            )
          })}
        </section>
      </section>
    </div>
  );
}

export default SearchPage;
