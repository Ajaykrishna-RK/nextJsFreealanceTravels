import { useAnimation, useInView , motion} from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function SectionTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);


  
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 gap-5 lg:gap-10">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="justify-start items-center lg:items-end flex flex-col px-4 lg:px-0 lg:pl-10"
      >
        <p className="text-[13px] uppercase text-end text-[#111]">
          {" "}
          why we are{" "}
        </p>
        <p className="text-[#181e76] text-center font-[600] leading-[50px] text-[2.5rem]">
          Enjoy the journey – travel with us
        </p>
      </motion.div>
      < motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <p className="text-[#111] text-[16px] px-4">
          Dolor augue curae montes eget sollicitudin diam praesent non mus in
          lobortis. Ligula magna himenaeos dictumst cubilia dolor morbi letius
          tempor in convallis. Semper litora suscipit facilisis scelerisque
          aenean rhoncus tempus mauris interdum dis parturient. Ultrices feugiat
          adipiscing pharetra penatibus praesent non fusce ipsum class. Sociosqu
          turpis scelerisque laoreet pulvinar fermentum posuere nam mollis
          porttitor convallis dictumst.
        </p>
    </motion.div>
    </div>
  );
}

export default SectionTwo;
