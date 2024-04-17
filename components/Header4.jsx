"use client";
import Image from "next/image";

export const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 border-gray-300 p-5 rounded-lg">
      <div className="flex items-center">
        <Image
          src={"/cash.png"}
          alt="fire"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-5"
        />

        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
        </div>
        <div className="flex">
          <input
            type="email"
            className="px-4 py-2 outline-none border border-gray-300 rounded-lg mr-5 w-30 h-15"
            placeholder="e.g john@gmail.com"/>

          <button type="submit" className="w-24 h-13 bg-red-500 text-white cursor-pointer rounded-lg">Notify</button>
        </div>
      </div>
   
  );
};
