import Image from "next/image";

export const Block = ({ title, para }) => {
  return (
    <div className="w-60 flex items-center px-3 border-r-2 boder-gray-300">
      <Image
        src={"/cash.png"}
        alt="demo"
        width={200}
        height={200}
        className="w-10 h-10 rounded-full mr-3"
      />

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-4000 text-sm line-clamp-1">{para}</p>
      </div>
    </div>
  );
};
