import { twMerge } from "tailwind-merge";

function About({className}: {className?: string}) {
  return (
   <div className={twMerge("", className)}>
     <div className="grid md:grid-cols-2 gap-10">
      <img className="size-full object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.onlineautorepair.net%2Fwp-content%2Fuploads%2F2021%2F07%2Ffedca979d7e6cb8e8cef73fd4636079f.jpeg&f=1&nofb=1&ipt=ed11dfbb6cec4a8d1bef1557bef08bed3c04aa2653878b2fdc2c6b3bddb22b15&ipo=images" alt="Car dealer" />
      <div>
        <h1 className="text-balance">As you ignite the engine, your adventure takes off</h1>
        <p>Beneath the whispering shadows of a moonlit garden, the symphony of silence danced with the golden echoes of forgotten dreams. Each petal, a silent ode to the ineffable mysteries of time, fluttered in the breath of an ancient wind, carrying the unspoken promises of a thousand tomorrows.</p>
        <div className="grid grid-cols-3 gap-1">
          <DealerShipEntry highlight="24" text="Car Types" />
          <DealerShipEntry highlight="42" text="Rental Outlets" />
          <DealerShipEntry highlight="9" text="Years Of Experience" />
        </div>
      </div>
    </div>
   </div>
  );
}

function DealerShipEntry({highlight, text} : {highlight: string, text: string}) {
  return (
    <div className="inline-flex items-end gap-1">
    <p className="text-6xl font-bold after:content-[''] relative after:absolute after:bg-primary after:h-1 after:bottom-0 after:right-0 after:w-full">{highlight}</p>
    <p className="font-semibold">{text}</p>
  </div>
  )
}

export default About;