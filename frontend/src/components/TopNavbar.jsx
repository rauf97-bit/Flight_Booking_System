import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import plane from "../images/Vector_plane_lg.svg";
import ham from "../images/Vector_ham.svg";
import user from "../images/Vector_user.svg";

const TopNavbar = (props) => {
  const links = [
    { name: "HOME", path: "/" },
    { name: "BOOK A FLIGHT", path: "/booking" },
    { name: "MANAGE BOOKING", path: "/manage" },
    { name: "ABOUT US", path: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {!isOpen ? (
        <button
          className="top-6 md:hidden right-4 fixed text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="fixed top-6 md:hidden  right-4 z-50 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
      <nav className={`top-0  p-4 text-primary `}>
        <div
          className={`container mx-auto flex flex-wrap items-center justify-between px-2 md:px-24`}
        >
          <NavLink to="/" className="text-3xl font-extrabold flex items-center justify-self-end justify-end">
            <img src={plane} alt="Home-Img"/>            
          </NavLink>
          <ul
            className={`flex flex-col md:flex-row bg-white md:bg-none absolute left-0 top-16 z-auto pb-3 md:pb-0 w-full md:w-auto md:static ease-in-out duration-300 ${
              isOpen ? "translate-y-0" : "translate-y-[-500px]"
            } `}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="mx-3 p-2 hover:opacity-50"
              >
                <NavLink to={link.path} className="mr-1 flex items-center">
                  {link.name}

                  {link.name === "ABOUT US" ? (
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.88244 7.7696C6.95125 7.84066 7.04332 7.89875 7.15072 7.93889C7.25813 7.97903 7.37765 8 7.49898 8C7.62032 8 7.73984 7.97903 7.84724 7.93889C7.95465 7.89875 8.04672 7.84066 8.11553 7.7696L14.8661 0.836743C14.9442 0.756778 14.99 0.663118 14.9985 0.565938C15.0071 0.468757 14.978 0.371773 14.9144 0.285524C14.8509 0.199274 14.7553 0.127057 14.6381 0.0767191C14.5208 0.0263811 14.3865 -0.000152706 14.2495 6.61103e-07H0.748455C0.611827 0.000401918 0.477937 0.027277 0.361185 0.0777355C0.244433 0.128194 0.149235 0.200327 0.0858294 0.286377C0.0224239 0.372427 -0.0067904 0.469139 0.0013282 0.566112C0.00944681 0.663084 0.0545911 0.756648 0.131906 0.836743L6.88244 7.7696Z"
                        fill="#07B0FF"
                      />
                    </svg>
                  ) : null}
                </NavLink>
              </li>
            ))}
            <li className="mx-3 border-[1px] border-primary p-1 px-3 flex items-center justify-center rounded-full max-w-[100px]">
              <NavLink to={"/dashboard"}>
                <div className="flex">
                    <img src={ham} alt="ham" className="mr-1" />
                    <img src={user} alt="user" className="ml-1" />
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default TopNavbar;
