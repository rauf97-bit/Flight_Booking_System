import React from "react";
import Flights from "../containers/Flights";
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
        <button className="bg-white  rounded-full w-10 h-10 flex items-center justify-center absolute left-12 z-10 ">
          <img src={left} alt="left" />
        </button>
        {data.map((data) => (
          <Flights key={data.id} data={data} />
        ))}
        <button className="bg-white  rounded-full w-10 h-10 flex items-center justify-center absolute right-12 z-10">
          <img src={right} alt="left" />
        </button>
      </div>
    </div>
  );
};

export default Home;
