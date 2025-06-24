import React from "react";
import innerbg from "../../public/Inner_bg.jpg";
interface Props {
  title: string;
  subtitle1: string;
  subtitle2: string;
  classsubtitle2: string;
  subtitle3: string;
  classsubtitle3: string;
  star:string;
}
function pagerheader({ subtitle1, subtitle2, subtitle3, title,classsubtitle2,classsubtitle3,star }: Props) {
  return (
    <div
      className="w-full h-[90vh] flex flex-col items-center justify-center gap-[15px] sm:gap-[20px] md:gap-[30px] px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${innerbg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-white text-center leading-tight">
        Our <span className="text-[#bff747]">{title}</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-5 text-sm sm:text-lg md:text-xl lg:text-2xl text-center">
        <span>{subtitle1}</span>
        <span>*</span>
        <span className={`${classsubtitle2}`}>{subtitle2}</span>
        <span>{star}</span>
        <span className={`${classsubtitle3}`}>{subtitle3}</span>
      </div>
    </div>
  );
}

export default pagerheader;
