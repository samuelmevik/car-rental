import { useState } from "react";
import { FaCar } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoX } from "react-icons/go";
import PrimaryButton from "./ui/PrimaryButton";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="z-50 h-16 w-full fixed backdrop-blur-lg">
      <div className="size-full mx-auto max-w-7xl flex justify-between items-center p-2">
        <a className="z-40" href="#"><FaCar className="size-12 text-primary" /></a>
        <button className="z-20 md:hidden" onClick={toggleNavbar}>
          {
            isOpen ? <GoX className="size-12" /> : <CiMenuFries className="size-12" />
          }
        </button>
        <div className="hidden md:flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Models</a>
          <a href="#">Testimonials</a>
          <a href="#">Our Team</a>
          <a href="#">Contact</a>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="duration-500 hover:text-primary">Sign In</button>
          <PrimaryButton text="Sign Up" hover />
        </div>

        <div className={`fixed z-10 top-0 left-0 h-svh w-svw overflow-hidden bg-secondary transition-transform duration-500 ease-in-out -translate-x-full sm:!-translate-x-full ${isOpen && 'translate-x-0'}`}>
          <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl  ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar;