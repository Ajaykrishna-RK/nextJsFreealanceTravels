
import Link from "next/link";
import React from "react";


function Header() {



  return (
    <div
      style={{ backgroundImage: "linear-gradient(150deg, #AE02FF ,#181E76);" }}
      className="h-20 shadow-xl sticky top-0  z-50 items-center flex justify-between px-[4%] "
    >
      <div
       
        className="text-[25px] text-[#fff] headFont font-[400]"
      >
       <span className="font-[600]">Pranav</span>  Travels
      </div>

      <div className=" text-[#fff] headFont flex flex-col items-center">
        <p className="text-[18px] font-[600]"> Call Center </p>
        <Link className="text-[16px]" href="tel:9447392407">
          {" "}
         9447392407
        </Link>
      </div>
    </div>
  );
}

export default Header;
