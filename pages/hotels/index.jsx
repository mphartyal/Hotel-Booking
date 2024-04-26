import Hotel from "@/components/Hotel";
import { Header1 } from "@/components/Header1";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12"></div>
      {hotels
        ? hotels.map((e) => {
            return (
              <div className="m-5" key={e._id}>
                <Hotel e={e} />
              </div>
            );
          })
        : ""}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
