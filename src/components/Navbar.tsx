import { useState } from "react";
import { FaCar } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GoX } from "react-icons/go";
import PrimaryButton from "./ui/PrimaryButton";
import { Link } from "react-router-dom";


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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/models">Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/our-team">Our Team</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="duration-500 hover:text-primary">Sign In</button>
          <PrimaryButton text="Sign Up" hover />
        </div>

        <div className={`fixed z-10 top-0 left-0 h-svh w-svw overflow-hidden bg-secondary transition-transform duration-500 ease-in-out -translate-x-full sm:!-translate-x-full ${isOpen && 'translate-x-0'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl  ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/models">Models</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;