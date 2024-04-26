"use client";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[login, setLogin] = useState(false);


  const router = useRouter();


  

  const handleSignup = async()=>{
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });

    if(res?.data){
      Cookies.set("user", res.data.token, {expires:7});
      alert(res.data.msg);
      router.back();
    }
  };


  const handleLogin = async()=>{
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });

    if(res?.data){
      Cookies.set("user", res.data.token, {expires:7});
      alert(res.data.msg);
      router.back();
    }
  };


  const handleToggle = ()=>{
    setLogin(!login);
  };


  return (
    <div>
      <Head>
        <title>HB - Login !</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
        <div className="absolute w-full top-10 px-20 flex items-center text-white ">
          <h2 className="text-6xl font-bold mr-5 backdrop-blur-sm">HB</h2>
          <p className="font-bold text-2xl backdrop-blur-sm">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center ml-7">
          <div className="text-white ">
            <p className="font-bold text-5xl text-justify backdrop-blur-sm">
              There's is smarter way to book around
            </p>
            <p className="text-2xl mt-5 text-justify backdrop-blur-sm">
              Sign up with your phonbe number and get exclusive access to
              discounts and savings on HB stays and with your many travel
              partner
            </p>
          </div>
          <div className="ml-20 w-5/12 pb-40 mr-20 h-auto bg-slate-100 rounded-lg">
            <p className="h-10 px-10 flex items-center bg-gradient-to-r from-blue-600 to bg-blue-400 font-bold text-white">
              Sign Up & get ₹500 Wallet Money
            </p>
            <div className="px-10">
              <h3 className="text-4xl font-bold my-5">Login / Sign Up</h3>
              <p className="font-semibold text-lg mb-1">
                Please enter your phone number to continue
              </p>
              
              {
                login ? (""):(
                  <input
                type="text"
                placeholder="Enter your name"
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 rounded-lg text-lg"
                onChange={(e)=>setName(e.target.value)}
              />
                )
              }

              <input
                type="email"
                placeholder="Enter your email.."
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 rounded-lg text-lg"
                onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10 rounded-lg text-lg"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-40 py-2 mt-5 text-base font-bold bg-blue-600 hover:cursor-pointer text-white rounded-lg"
                onClick={login ? handleLogin : handleSignup}

              >
                {login ? "Login" : "Sign Up"}
              </button>

              <p className="my-10 text-base">
                <span>{login ? "Don't have an account? " : "Already have an account?"}</span>
                <span className="ml-5 border-b-2 border-blue-500 text-blue-600 font-semibold hover:cursor-pointer" onClick={handleToggle}>
                  
                  {login ? "Sign Up":"Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
