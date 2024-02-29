/* eslint-disable react/no-unknown-property */
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useUserContext } from "../FlightContext/UserContext";

function Header({ handleModal }) {
  const { logged, userdetail } = useUserContext();
  return (
    <div
      className="w-full z-10 h-16 mb-6"
      style={{
        background: "transparent",
      }}
    >
      <div className="">
        <div className="flex sm:justify-around justify-between p-3">

          <Link className="flex gap-2">
            <HiOutlineMenuAlt2 className="text-white text-3xl sm:hidden visible font-bold" />
            <img
              style={{ width: "113px", height: "36px" }}
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
            />
          </Link>
          <div className="sm:flex hidden ">
            <div className="flex gap-2 p-2">
              <svg
                class="w-[31px] h-[31px] text-white bg-transparent offer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                />
              </svg>
              <div className=" flex flex-col">
                <span className="text-xs font-black text-white">
                  Super offers
                </span>
                <span style={{ fontSize: "10px", color: "#c2c2c2" }}>
                  Explore great deals and offers
                </span>
              </div>
            </div>

            <div className="flex gap-2 p-2">
              <img
                className="h-6"
                src="https://imgak.mmtcdn.com/mybiz/assets/images/mybizlogo.png"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black text-white ">
                  Introducing myBiz
                </span>
                <span style={{ fontSize: "10px", color: "white" }}>
                  Business travel solution
                </span>
              </div>
            </div>

            <div className="flex gap-2 p-2">
              <img
                className="h-6"
                src="../../assets/Screenshot 2024-01-29 165902.png"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black text-white ">My Trips</span>
                <span style={{ fontSize: "10px", color: "#c2c2c2" }}>
                  Manage your bookings
                </span>
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(93deg, #53b2fe, #065af3)",
                width: "213px",
                height: "42px",
                color: "white",
                fontSize: "10px",
                fontWeight: "500",
                alignItems: "center",
              }}
              className="p-2 rounded flex justify-between cursor-pointer "

            >
              <div className="flex gap-2"

              >
                <img
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                  src="../../assets/Screenshot 2024-01-29 171454.png"
                />
                {logged ? <span className="font-black text-base">{userdetail.name}</span> : <span
                  onClick={() => handleModal("sign")}
                >Login or Create Account</span>}
              </div>
              <div>
                <svg
                  class="w-[15px] h-[15px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              style={{
                width: "125",
                height: "42px",
                background: "rgba(255, 255, 255, 0.15)",
              }}
              className="text-white p-3 text-xs ml-2 rounded flex gap-2"
            >
              <span>IN | ENG | INR</span>
              <svg
                class="w-[15px] h-[15px] text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(93deg, #53b2fe, #065af3)",
              width: "153px",
              height: "42px",
              color: "white",
              fontSize: "10px",
              fontWeight: "500",
              alignItems: "center",
            }}
            className="p-2 rounded flex sm:hidden "
          >
            <div className="flex gap-2 sm:hidden ">
              <img
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                src="../../assets/Screenshot 2024-01-29 171454.png"
              />
              {logged ? <span >{userdetail.name}</span> : <span onClick={() => handleModal("sign")}>Login or Create Account</span>}
            </div>
            <div>
              <svg
                class="w-[15px] h-[15px] text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
