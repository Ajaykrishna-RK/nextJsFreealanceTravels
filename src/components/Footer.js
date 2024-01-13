
import Link from "next/link";
import React from "react";

function Footer() {

const datas = [
  {
    id:1,
    name:"Palakkad, Kerala  India"
  },
  {
    id:2,
    name:"pranavtourplanners@gmail.com"
  },
  {
    id:3,
    name:"9447392407"
  }
]


  return (
    <div
      style={{
        background: "linear-gradient(180deg, #181E76E8 30%, #191919 100%)",
      }}
      className="h-full text-[#fff] justify-center sm:justify-between sm:px-10   mt-10  items-center sm:items-start grid  sm:flex "
    >
      <div className="mt-10 justify-center items-center grid ">
        <p className="text-center text-[30px]"> <span className="font-[700]">Pranav</span> Travels</p>
        <button className="bg-[#ffae02] rounded-lg p-2 mt-2 text-[#111]">
        <Link className="text-[20px] " href="tel:9447392407">
          {" "}
         9447392407
        </Link>
          
          
           </button>
      </div>

      <div className="mt-10 mb-10 ">
        <p className="text-center text-[30px] font-[600]"> Contact Us </p>
        {datas?.map((item)=>(
      <p className="text-center mt-2 text-[18px]"> 
    {item?.name}</p>
        ))}
  
      
      </div>
    </div>
  );
}

export default Footer;
