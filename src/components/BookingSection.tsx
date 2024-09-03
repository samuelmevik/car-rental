import PrimaryButton from "./ui/PrimaryButton";
import { cars, dropofLocations, pickupLocations } from "../db";


function Booking() {
  const names = cars.map((car) => car.name);
  return (
    <div className="grid place-items-center min-h-fit">
      <div className="bg-gray-300 size-full p-4 pb-10 max-w-6xl">
        <h2>Book your car now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 size-full">
          <CarOption label="Car" options={names} />
          <CarOption label="Pickup Location" options={pickupLocations} />
          <CarOption label="Dropoff Location" options={dropofLocations} />
          <div>
            <p>Pick-up (date)</p>
            <input type="date" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
          </div>
          <div>
            <p>Drop-of</p>
            <input type="date" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
          </div>
          <div>
            <br />
            <PrimaryButton text="Search" hover />
          </div>
        </div>
      </div>
    </div>
  );
}



function CarOption({ label, options }: { label: string, options: string[] }) {
  return (
    <div>
      <p>{label}</p>
      <select className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
        {options.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
    </div>
  );
}


export default Booking;