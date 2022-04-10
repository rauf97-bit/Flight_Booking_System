import React, {useState} from "react";
import HeroDropdowns from "./HeroDropdowns";
import manageImg from '../images/Vector_booking.svg'
import flightImg from '../images/Vector_plane.svg'
import checkImg from '../images/Vector_check.svg'
import downArrow from '../images/Vector_down_1.svg'
import upArrow from '../images/Vector_up.svg'

const HeroCards = ({ title }) => {
  const [isOpen, setisOpen] = useState(false)
  const handleClick = () => {
    setisOpen(!isOpen)
  }
  return (
    <div className="p-6 px-4 relative  min-w-[300px] items-center min-w-sm justify-between bg-white text-primary">
      <div className="flex items-center justify-between">
        <div className="flex">
          {title === "BOOK FLIGHT" ? (
            <img src={flightImg} alt="Fly" />
          ) : title === "MANAGE BOOKING" ? (
            <img src={manageImg} alt="Manage" />
          ) : (
            <img src={checkImg} alt="check" />
          )}
          <h3 className="ml-2">{title}</h3>
        </div>
        {isOpen ? (
          <button onClick ={handleClick} className="cursor-pointer p-4">
          <img src={upArrow} alt="Up" />
          </button>
        ) : (
          <button onClick ={handleClick} className="cursor-pointer p-4">
          <img src={downArrow} alt="Down" />
          </button>
        )}
      </div>
      {isOpen && title === "BOOK FLIGHT" ?
      <div className="absolute left-0 top-11 z-30">
        <HeroDropdowns />
      </div> : null}
    </div>
  );
};

export default HeroCards;
