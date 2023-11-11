"use client";
import Image from "next/image";
import { useState } from "react";
import bell from "../assets/bell.png";
import burger_menu from "../assets/burger_menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-blue-primary px-4 py-3 flex flex-row justify-between items-center relative">
      <Image src={logo} alt="Logo" className="h-10 w-auto" />
      <div className="flex flex-row justify-center items-center gap-6">
      <button>
        <Image src={bell} alt="bell" className="h-10 w-auto" />
      </button>
      <button onClick={() => setMenu(true)}>
        <Image src={burger_menu} alt="Logo" className="h-8 w-auto" />
      </button>
      </div>
      
      <div
        className={`bg-blue-primary h-screen absolute flex flex-col justify-start items-end gap-10 top-0 right-0 duration-300 ease-in-out ${
          menu ? "w-auto px-10 py-4" : "w-0"
        } `}
      >
        {menu ? (
          <>
            <button className="cursor-pointer" onClick={() => setMenu(false)}>
              <Image src={close} alt="close" className="h-8 w-8" />
            </button>

            <ul className="flex flex-col gap-4 text-yellow-primary text-lg">

              <li>Home</li>
              <li>Create Log</li>
              <li>See Logs</li>
              <li>Profile</li>
              <li>Analytics</li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
