"use client";
import Link from "next/link";
import { useState } from "react";
export const Header3 = () => {

  const [city, setCity] = useState(' ');
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-60">
      <div className="mx-10 p-5">
        <h2 className="text-3xl text-white text-center font-bold">
          Over 230,000 hotels and homes across 40 Cities+
        </h2>
        <div className="flex justify-center my-10">
          <input
            type="text"
            placeholder="Search..."
            className=" h-11 outline-none px-3 text-lg border-r-2 w-6/12 border-gray-400 "
            onChange={(e)=> {setCity(e.target.value)}}
          />

          {/* <input
            type="text"
            placeholder="Search..."
            className=" h-11 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />

          <input
            type="text"
            placeholder="Search..."
            className=" h-11 outline-none px-3 text-lg "
          /> */}

          <Link href={`/hotels?city=${city}`}>
            <button
              type="submit"
              className="h-11 w-72 font-semibold bg-green-500 hover::cursor-pointer hover:bg-green-400 text-white text-xl"
            >
              Search
            </button>
          </Link>
        </div>

        <div className="flex mx-5 my-5 font-medium">
          <button type="submit" className="h-13 w-60 px-3 py-2 text-white  ">
            Continue your search
          </button>

          <button
            type="submit"
            className="h-13 w-60 text-white border-2 border-white px-3 py-2 rounded-2xl hover:bg-green-500"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
