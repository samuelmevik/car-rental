
import PrimaryButton from "./ui/PrimaryButton";
import { MdPhoneInTalk } from "react-icons/md";

function Foot() {
  return (
    <footer className="max-h-fit mt-auto">
      <div className="h-full grid grid-cols-2 sm:grid-cols-4 gap-1 *:p-2 text-center">
      <div className="flex flex-col gap-2">
          <h2>Car Rental</h2>
          <p className="text-balance">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <p className="font-semibold inline-flex items-center self-center"><MdPhoneInTalk /> (+46)-123-456</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Company</h2>
          <p className="hover:text-primary transition-colors duration-500">Kalmar</p>
          <p className="hover:text-primary transition-colors duration-500">Careers </p>
          <p className="hover:text-primary transition-colors duration-500">Mobile</p>
          <p className="hover:text-primary transition-colors duration-500">Blog</p>
          <p className="hover:text-primary transition-colors duration-500">How we work</p>
        </div>
        <div className=" flex flex-col gap-2">
          <h2>Working Hours</h2>
          <p className="hover:text-primary transition-colors duration-500">Mon - Fri: 9:00AM - 9:00PM</p>
          <p className="hover:text-primary transition-colors duration-500">Sat: 9:00AM - 19:00PM</p>
          <p className="hover:text-primary transition-colors duration-500">Sun: Closed</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Subscription</h2>
          <p className="text-balance">Subscribe your Email address for latest news <span className="text-primary">&</span> updates.</p>
          <input type="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
          <PrimaryButton text="Subscribe" hover />
        </div>
      </div>
    </footer>
  );
}

export default Foot;