import React, { useEffect, useState } from "react";
import china from "../images/china_logo.png";
import istanbul from "../images/istanbul_logo.png";
import london from "../images/london_logo.png";

const Flights = ({ data }) => {
  // const [bcg, setBcg] = useState('')
  // useEffect(() => {
  //   setBcg(`bg-${data.arrive.toLowerCase()}`)
  // }, [data.arrive])
  return (
    <div
      className={`p-3 text-white ${
        data.arrive === "China"
          ? "bg-china"
          : data.arrive === "London"
          ? "bg-london"
          : "bg-istanbul"
      } h-[100%] bg-cover relative`}
    >
      
      <div className="h-full flex flex-col justify-between items-stretch">
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-semibold">
              {data.depart} &#8594; {data.arrive}
            </p>
            <p>{data.date}</p>
          </div>
          <img
            src={
              data.arrive === "China"
                ? china
                : data.arrive === "London"
                ? london
                : istanbul
            }
            alt=""
            srcset=""
          />
        </div>
        <div className="flex justify-between">
          <div className="p-2">
            <p>Pay now</p>
            <p className="text-xl font-semibold">{data.expressPrice}</p>
          </div>
          <div className="p-2 bg-yellow-600">
            <p>Lock is free</p>
            <p className="font-semibold text-xl">{data.payPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
