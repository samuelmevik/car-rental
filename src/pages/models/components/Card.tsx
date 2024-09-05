import { Car } from "../../../db";
import PrimaryButton from "../../../components/ui/PrimaryButton";

function Card(car: Car) {
  return (
    <div className="bg-tertiary shadow-lg grid aspect-[3/4] max-w-sm size-full">
      <div className="grid grid-rows-3">
        <img src={car.img} alt={car.name} className="object-cover row-span-3 object-center size-full" />
        <div className="grid px-4 pb-4">
          <div className="grid place-items-center">
            <h3>{[...Array(5)].map((_, index) => index < car.stars ? (<span>★</span>) : (<span>☆</span>))}</h3>
          </div>
          <div className="flex justify-between">
            <h3>{car.name}</h3>
            <h3 className="text-nowrap">${car.price}<span className="text-primary">/</span><span className="text-base">per day</span></h3>
          </div>
          <div className="flex justify-between">
            <p>🚘 {car.model}</p>
            <p>{car.doors} doors</p>
          </div>
          <div className="flex justify-between">
            <p>AC: {car.ac}</p>
            <p>Type: {car.transmission}</p>
          </div>
          <PrimaryButton text="Rent Now" hover />
        </div>
      </div>
    </div>
  );
}

/*

          <div className="flex justify-center">
            <h3>
              {[...Array(5)].map((_, index) => index < car.stars ? (<span>★</span>) : (<span>☆</span>))}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3>{car.name}</h3>
            <div className="grid">
              <h3 className="leading-none">${car.price} <span className="text-primary">/</span></h3>
              <p className="leading-none">per day</p>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="inline-flex items-center gap-1"><FaCarSide /><p>{car.model}</p></span>
            <p>{car.doors} doors</p>
          </div>

          <div className="flex justify-between">
            <p>AC: {car.ac}</p>
            <span className="inline-flex gap-1 items-center" ><TbManualGearbox /><p>{car.transmission}</p></span>
          </div>
          <PrimaryButton text="Rent Now" hover />

*/

export default Card;