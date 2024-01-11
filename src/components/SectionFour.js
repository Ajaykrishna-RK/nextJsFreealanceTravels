import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

function SectionFour() {
  const data = [
    {
      id: 1,
      name: "Bus",
      seats: 45,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
      image:
        "https://web.moxcreative.com/bigtranz/wp-content/uploads/sites/19/2023/03/t5jzprtvf1u-768x512.jpg",
    },

    {
      id: 2,
      name: "Traveller",
      seats: 20,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
      image:
        "https://web.moxcreative.com/bigtranz/wp-content/uploads/sites/19/2023/03/t5jzprtvf1u-768x512.jpg",
    },
    {
      id: 3,
      name: "Innova",
      seats: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
      image:
        "https://web.moxcreative.com/bigtranz/wp-content/uploads/sites/19/2023/03/t5jzprtvf1u-768x512.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        ref={ref}
        className="justify-center items-center flex flex-col mt-12"
      >
        <p className="text-[#181e76] text-center font-[600] leading-[48px] sm:leading-[50px] text-[2.5rem]">
          Get On Road With Our Vehicle
        </p>
      </motion.div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-5 px-4 pb-10   sm:px-10 mt-10"
      >
        {data?.map((item) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="shadow-lg pb-5"
          >
            <div className="w-[100%] h-[270px] ">
              <img
                className="w-full h-full object-cover"
                src={item?.image}
                alt=""
              />
            </div>
            <div className="p-4">
              <p className="text-[#181e76] font-[600] text-[1.5rem]">
                {" "}
                {item?.name}{" "} <span className="text-[#111] text-[1.3rem] font-[400] opacity-80">/ {item?.seats}+ seats</span>
              </p>
              <p className="text-[16px] opacity-70 text-[#111] py-2">
                {" "}
                {item?.text}{" "}
              </p>
            </div>
            <div className="px-4 ">
              <button className="w-full text-[20px] font-[600]  h-10 bg-[#ffae02]  items-center  text-[#111]">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionFour;
