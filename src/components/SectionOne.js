import React from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

function SectionOne() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 mt-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="justify-center lg:pl-10 lg:pr-0 pr-4 pl-4 items-center flex flex-col"
      >
        <p className="text-[#181e76] text-[2.5rem] leading-[48px]  font-[600]">
          A bus rental that's affordable and comfortable
        </p>
        <p className="text-[18px] font-[400] text-[#111]  mt-4">
          Letius quis dui at lectus congue natoque et adipiscing curabitur
          molestie. Mattis magnis mollis ultricies eros tortor vivamus
          venenatis. Mauris iaculis amet porta lobortis dictum cubilia et ex.
        </p>
        <div className="flex items-center gap-3 lg:gap-6  mt-4">
          <div>
            <p className="text-[#ffae02] font-[600] text-[36px] ">25+</p>
            <p className="text-[18px] font-[600] text-[#111]">Bus Ready </p>
            <p className="text-[18px] font-[400] text-[#111] opacity-85">
              Sed nunc si consectetur convallis facilisis dictumst nibh.
            </p>
          </div>
          <div>
            <p className="text-[#ffae02] font-[600] text-[36px] ">97%</p>
            <p className="text-[18px] font-[600] text-[#111]">
              Satisfied Customer
            </p>
            <p className="text-[18px] font-[400] text-[#111]  opacity-85">
              Sed nunc si consectetur convallis facilisis dictumst nibh.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="justify-center items-center flex lg:mt-0 mt-10 "
      >
        <div
          style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.15)" }}
          className="w-[95%] h-full p-4 "
        >
          <img
            src="https://web.moxcreative.com/bigtranz/wp-content/uploads/sites/19/2023/03/smiling-woman-with-smartphone-at-bus-stop-in-london-1536x1024.jpg"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}

export default SectionOne;
