import React from "react";
import HeroCards from "../containers/HeroCards";
import right from "../images/Vector_right.svg";
import left from "../images/Vector_left.svg";
const Hero = () => {
  const data = [
    { title: "BOOK FLIGHT" },
    { title: "MANAGE BOOKING" },
    { title: "ONLINE CHECK IN" },
  ];
  return (
    <div className="bg-hero-img h-[50vh] relative">
      <div className="flex h-full justify-around items-center relative">
        <div className="bg-white  rounded-full w-10 h-10 flex items-center justify-center absolute -left-3">
          <img src={left} alt="left" srcset="" />
        </div>
        {data.map((data) => (
          <HeroCards key={data.title} title={data.title} />
        ))}
        <div className=" bg-white rounded-full w-10 h-10 flex items-center justify-center absolute -right-3">
          <img src={right} alt="right" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
