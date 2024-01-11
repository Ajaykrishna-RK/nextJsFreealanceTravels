import { useAnimation, useInView,motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function SectionThree() {
  const datas = [
    {
      id: 1,
      name: "Tours and Excursions",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
    {
      id: 2,
      name: "Airport Shuttles",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
    {
      id: 3,
      name: "Private Travelers",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
    {
      id: 4,
      name: "Corporate Travelers",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
    {
      id: 5,
      name: "Wedding Guests",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
    {
      id: 6,
      name: "School Bus Rental",
      text: "Finibus porta urna eget egestas amet nisi vel bibendum. Mi litora dui scelerisque risus facilisi.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]) ;

  return (
    <>
      <motion.div 
      ref={ref}
      
      variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }} className="justify-center items-center flex flex-col mt-8 sm:mt-10">
        <p className="text-[13px] uppercase text-center text-[#111]">
          {" "}
          Our services{" "}
        </p>
        <p className="text-[#181e76] text-center font-[600] leading-[48px] sm:leading-[50px] text-[2.5rem]">
          We Provide Best Services For You
        </p>
        <p className="text-[13px] text-center  text-[#111]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </motion.div>

      <div ref={ref} className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4  sm:px-10 mt-10">
        {datas?.map((item) => (
          <motion.div
          
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
           }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          
          style={{boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.15)"}} className="w-full h-full py-4">
            <div className="w-[95%] h-full py-5  mx-auto bg-[#f4f4f4] text-center">

<p className="text-[1.5rem] text-[#181e76] font-[600]  "> {item?.name} </p>
<p className="text-[14px] text-[#111] pt-2 px-8"> {item?.text} </p>
           
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionThree;
