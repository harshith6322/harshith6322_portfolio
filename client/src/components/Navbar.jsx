import { useState } from "react";
import ContactForm from "./ContactForm";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className="  w-screen h-[70px] px-10 py-4 fixed top-0 bg-slate-950/95 max-md:px-7 max-sm:z-50">
      <div className=" flex justify-between items-center text-white">
        <div className=" flex gap-1">
          <div className="rounded-full w-[22px] h-[22px] bg-purple-600"></div>
          <div className="rounded-full w-[22px] h-[22px] bg-blue-500"></div>
        </div>
        <div>
          <a href="#p1">
            <button
              className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white z-10"
              onClick={() => setopen((o) => !o)}
            >
              <span className="relative px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact Me
              </span>
            </button>
          </a>

          {open ? <ContactForm setopen={setopen} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
