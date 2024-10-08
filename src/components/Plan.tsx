import { GiCarKey } from "react-icons/gi"
import { IoCarSport, IoPerson } from "react-icons/io5"

function Plan() {
  return (
    <div>
      <h2 className="text-center">Plan your trip now</h2>
      <h1 className="text-center">Quick <span className="text-primary">&</span> Easy Car Rental</h1>
      <div className="grid sm:grid-flow-col gap-3 h-max text-center sm:pt-12">
        <div className="grid">
          <div style={{ borderRadius: "30% 70% 70% 30% / 30% 51% 49% 70% " }} className="size-40 justify-self-center bg-secondary grid place-items-center">
            <IoCarSport className="size-28 text-primary" />
          </div>
          <h2>Select Car</h2>
          <p className="text-balance">We provide a wide selection of vehicles to suit all your driving requirements. Whatever you need, we have the ideal car for you</p>
        </div>
        <div className="grid">
          <div style={{ borderRadius: "75% 25% 41% 59% / 66% 51% 49% 34%" }} className="size-40 justify-self-center bg-secondary grid place-items-center">
            <IoPerson className="size-28 text-primary" />
          </div>
          <h2>Contact Operator</h2>
          <p className="text-balance">Our experienced and approachable team is always prepared to assist with any questions or concerns.</p>
        </div>
        <div className="grid">
          <div style={{ borderRadius: "23% 77% 68% 32% / 66% 33% 67% 34% " }} className="size-40 justify-self-center bg-secondary grid place-items-center">
            <GiCarKey className="size-28 text-primary" />
          </div>
          <h2>Let<span className="text-primary">'</span>s Drive</h2>
          <p className="text-balance">No matter where your journey takes you, our extensive selection of cars has you covered.</p>
        </div>
      </div>
    </div>
  )
}

export default Plan