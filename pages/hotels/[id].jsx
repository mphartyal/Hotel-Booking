'use client'
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";

const SingleHotel = ({hotel}) => {

  let auth;
  if(typeof window !== 'undefined'){
    auth = Cookies.get('user');
  }
  return (
<>
    <Head>
      <title>{hotel?.name}</title>
    </Head>
    <div className="w-7/12 mx-auto">
      <Image
        src={hotel?.banner}
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-60 my-5 mx-auto"
      />
      <div className="">
        <h3 className="text-3xl font-bold">
          {hotel?.name}
        </h3>
        <p className="text-lg my-5 text-justify">
          {hotel?.description}
        </p>
        <button className="w-40 h-14 rounded-lg bg-blue-500 text-lg">
          
          Price:  &#8377; {hotel?.price}
        </button>
        <p className="text-xl font-bold my-5">Facilities: </p>
        <ul className="flex text-lg justify-between">
          {
            hotel ? hotel.facilities?.map((ele)=>{
              return(
                <li key={ele.name} className="mr-5 mb-3 flex items-center">
                <span>
                  <Image src={ele.img} width={200} height={200} className="w-10 h-10 rounded-full"/>
                </span>
                <span className="ml-5">{ele.name}</span>
              </li>
            );
          })
        : ""
        }
        </ul>
        {
          auth ? <button className="w-40 h-14 rounded-lg bg-blue-500 text-lg my-5">
      
          Book Now
        </button> : <span className="text-xl">Please <Link href={'/login'} className="text-blue-500">Log in</Link> to get Offers !</span>
        }
      </div>
    </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();


  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
