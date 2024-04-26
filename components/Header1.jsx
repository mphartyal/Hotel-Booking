"use client";
import Image from "next/image";
import Block  from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
  } 
setAuth(false);}, [auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-auto px-9 py-2">
      <div className="relative">
        <Image
          src={"/cash.png"}
          alt="logo"
          width={200}
          height={200}
          className="w-28 h-28 "
        />
      </div>

      <div className=" flex">
        <Block title={"Become a member"} para={"Additional 10% off on stays"} />
        <Block
          title={"List Your Property"}
          para={"Trusted By 5000 Corporates"}
        />
        <Block title={"78902355"} para={"Call Us to book now"} />

        <div className="flex items-center px-6">
          <Image
            src={"/cash.png"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-3"
          />

          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout{" "}
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3 className="font-bold">Login / Sign Up </h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1