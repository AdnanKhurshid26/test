import Image from "next/image";
import biglogo from "../assets/biglogo.png";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-start">
      <div className="flex flex-col justify-center items-center">
      <Image src={biglogo} className=" w-2/4" />
      <h1 className="text-lg font-semibold">Keep log of all your travels</h1>
      </div>

    </div>
  );
};

export default page;
