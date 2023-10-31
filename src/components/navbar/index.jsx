import { useState } from "react";
import { NavbarItem } from "../navbarMenuItem";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="fixed w-full mt-6 z-50">
      <div className="max-w-[95vw]  flex flex-wrap items-center mx-auto py-2 rounded-full shadow-lg bg-white md:px-20">
        <a
          href="/"
          className={`flex items-center ${
            isMobileNavOpen ? "block" : "hidden"
          }`}
        ></a>
        <div className="md:hidden flex justify-between w-full px-4">
          <img src="/assets/Logo merah.png" alt="Logo" className="w-24" />
          <button
            onClick={toggleMobileNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 relative"
            aria-controls="navbar-sticky"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex justify-center w-full transform transition-all ease-in-out duration-300 ${
            isMobileNavOpen
              ? "translate-y-14 opacity-100"
              : "-translate-y-96 opacity-0"
          } md:hidden absolute top-0 left-0 right-0`}
        >
          <div className="flex flex-col justify-center items-center bg-white w-[90%] rounded-xl ">
            <NavbarItem path="/">Home</NavbarItem>
            <NavbarItem path="/video">Video</NavbarItem>
            <NavbarItem path="/schedule">Schedule</NavbarItem>
            <NavbarItem path="/team">Team</NavbarItem>
            <NavbarItem path="/driver">Driver</NavbarItem>
          </div>
        </div>
        <div
          className={`items-center justify-between w-full hidden md:flex md:w-full md:order-1`}
          id="navbar-sticky"
        >
          <img src="/assets/Logo merah.png" alt="Logo" className="w-48" />
          <ul className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto">
            <div className="flex justify-center items-center">
              <NavbarItem path="/">Home</NavbarItem>
              <NavbarItem path="/video">Video</NavbarItem>
              <NavbarItem path="/schedule">Schedule</NavbarItem>
              <NavbarItem path="/team">Team</NavbarItem>
              <NavbarItem path="/driver">Driver</NavbarItem>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
