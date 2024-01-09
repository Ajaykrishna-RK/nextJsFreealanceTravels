import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div
      className="pt-[15%] pb-[5%"
      style={{ backgroundImage: "linear-gradient(150deg, #AE02FF ,#181E76);" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <motion.div
          initial={{ x: "-100%",opacity:0 }}
          animate={{ x: 0 ,opacity:1}}
          exit={{ x: "100%",opacity:1 }}
          transition={{ duration: 0.9 }}
          className="justify-center items-center flex flex-col"
        >
          <p className= "text-[32px] sm:text-[52px] text-[#fff] font-[600] pl-4 sm:pl-10 leading-[33px] sm:leading-[55px]">
            {" "}
            Charter with us for an adventure-filled journey{" "}
          </p>
          <p className="text-[14px] sm:text-[20px] opacity-[0.9] font-[400] text-[#fff] pl-4 sm:pl-10 mt-4">
            Luctus nisi pharetra mollis aliquet iaculis tempus potenti. Dictumst
            vestibulum luctus eget sit sagittis et.
          </p>
        </motion.div>
        <motion.div  initial={{ x: "100%",opacity:0 }} 
        animate={{ x: 0 ,opacity:1}} 
        exit={{ x: "100%",opacity:1 }} 
        transition={{ duration: 0.9 }} className="">
          <img
            src="https://web.moxcreative.com/bigtranz/wp-content/uploads/sites/19/2023/03/Coach-Bus-mockup-04.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
    
  );
}
