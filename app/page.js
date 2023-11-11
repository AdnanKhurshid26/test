import Image from "next/image";
import envelopeImg from "./assets/envelope.png";
import notepadImg from "./assets/notepad.png";
import LastRecord from "./components/LastRecord";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-4 p-10 h-full">
        <button className="bg-blue-primary flex justify-between items-center px-6 py-2 rounded-md gap-4 text-white font-semibold text-lg">
          <Image src={notepadImg} className="h-10 w-auto" /> Create Log Manually
        </button>
        <button className="bg-yellow-primary flex justify-between items-center px-6 py-2 rounded-md gap-4 text-white font-semibold text-lg">
          <Image src={envelopeImg} className="h-10 w-auto" /> Import from Email
        </button>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-neutral-900 font-semibold text-lg">
            Last 5 Records
          </h1>
          <button className="bg-blue-primary text-white px-4 py-2 rounded flex justify-center items-center gap-1 font-semibold">
            Go to Logs <span className="font-bold text-lg">&#8599;</span>
          </button>
        </div>
        <div className="flex flex-col bg-neutral-200 divide-y divide-slate-600 overflow-scroll">
            <LastRecord/>
            <LastRecord/>
            <LastRecord/>
            <LastRecord/>
            <LastRecord/>
        </div>
      </div>
    </>
  );
}
