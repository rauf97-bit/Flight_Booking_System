import React from "react";
import Flights from "../components/Flights";
import Hero from "../components/Hero";
import TopNavbar from "../components/TopNavbar";
import { data } from "../data/flightData";
import right from "../images/Vector_right.svg";
import left from "../images/Vector_left.svg";

const Home = () => {
  return (
    <div>
      <TopNavbar color={"bg-primary"} />
      <Hero />
      <div className="p-6 h-[35vh] mx-auto px-16 grid grid-cols-3 gap-10 justify-between items-center relative">
        <div className="bg-white  rounded-full w-10 h-10 flex items-center justify-center absolute -left-3 ">
          <img src={left} alt="left" srcset="" />
        </div>
        {data.map((data) => (
          <Flights key={data.id} data={data} />
        ))}
        <div className="bg-white  rounded-full w-10 h-10 flex items-center justify-center absolute -right-3">
          <img src={right} alt="left" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
