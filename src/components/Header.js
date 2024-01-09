
import Link from "next/link";
import React from "react";


function Header() {



  return (
    <div
      style={{ backgroundImage: "linear-gradient(150deg, #AE02FF ,#181E76);" }}
      className="h-12 shadow-xl sticky top-0  z-50 items-center flex justify-between px-[4%] "
    >
      <div
       
        className="text-[20px] text-[#fff] headFont font-[400]"
      >
        Pranav Travels
      </div>

      <div className=" text-[#fff] headFont flex flex-col items-center">
        <p className="text-[12px] font-[600]"> Call Center </p>
        <Link className="text-[10px]" href="">
          {" "}
          6575757575{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
