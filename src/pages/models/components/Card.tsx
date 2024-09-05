import { Car } from "../../../db";

function Card(car: Car) {

  return (
    <div className="bg-tertiary shadow-lg grid aspect-[3/4] max-w-sm size-full">
      <div className="grid grid-rows-3">
        <img src={car.img} alt={car.name} className="row-span-2 object-cover object-center size-full" />
        <div className="grid px-4 pb-4">
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
            <p>{car.model}</p>
            <p>{car.doors} doors</p>
          </div>

          <div className="flex justify-between">
            <p>{car.ac}</p>
            <p>{car.transmission}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;