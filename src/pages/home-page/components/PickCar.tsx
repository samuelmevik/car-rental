import { useState } from "react"
import { Car, cars } from "../../../db"
import PrimaryButton from "../../../components/ui/PrimaryButton"


function PickCar() {
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0])
  return (
    <div>
      <h2 className="text-center">Vehicle models</h2>
      <h1 className="text-center">Our Rental Fleet</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-green-50 col-span-2 sm:order-2">
          <img src={selectedCar.img} alt="Car" className="object-cover size-full aspect-[4/3]" />
        </div>
        <div className="grid gap-3 sm:order-1">
          {cars.map((car) => (
            <CarButton key={car.name} car={car} setSelectedCar={setSelectedCar} />
          ))}
        </div>

        <div className="flex flex-col sm:order-3">
          <h2 className="bg-primary text-white text-center">${selectedCar.price} / rent per day</h2>
          <div className="grid gap-3 flex-1">
            <CarDataEntry label="Name" value={selectedCar.name} />
            <CarDataEntry label="Model" value={selectedCar.model} />
            <CarDataEntry label="Year" value={selectedCar.year} />
            <CarDataEntry label="Doors" value={selectedCar.doors} />
            <CarDataEntry label="AC" value={selectedCar.ac} />
            <CarDataEntry label="Transmission" value={selectedCar.transmission} />
          </div>
          <PrimaryButton className="border-t-0" text="Rent now" hover />
        </div>
      </div>
    </div>
  )
}

function CarDataEntry({ label, value }: { label: string, value: string }) {
  return (
    <div className="grid grid-cols-2 place-items-center border-2 border-primary transform transition-colors duration-500 hover:bg-secondary">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}

function CarButton({ car, setSelectedCar }: { car: Car, setSelectedCar: (car: Car) => void }) {
  function handleClick() {
    setSelectedCar(car)
  }
  return (
    <PrimaryButton
      onClick={handleClick}
      text={car.name}
      hover
    />
  )
}


export default PickCar