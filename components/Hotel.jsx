import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hotel = ({ e }) => {
  return (
    <div className="border-2 border-blue-600 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={e?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-large-box mr-3"
        />

        <div className="grid grid-rows-3">
          {
            e? e.gallery?.map((ele)=>{

              return(
                <Image
                key={ele}
                src={ele}
                
                alt="hotel"
                width={200}
                height={200}
                className="w-24"
              />
              )
            }) : ''
          }

         
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">{e?.name}</h2>
          <p className="text-justify my-5">{e?.description}</p>
          <div className="text-lg my-5">
            <span className="font-bold">Facilities :</span>

            <ul className="flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li key={ele.name} className="mr-5 mb-3 flex items-center">
                        <span>
                          <Image src={ele.img} width={200} height={200} className="w-10 h-10 rounded-full"/>
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ''}
            </ul>
          </div>
          <div className="flex items-center">
            <button className="w-40 h-14 rounded-lg bg-blue-500 text-lg">
            
              Price: &#8377; {e?.price}
            </button>
            <Link href={`/hotels/${e?._id}`} className="text-xl font-semibold ml-10">
              See details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
