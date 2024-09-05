import { twMerge } from "tailwind-merge";

function Testimonials({ className }: { className?: string }) {
  return (
    <div className={twMerge("", className)}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="md:col-span-2 text-center">
          <h2>Reviewed By People</h2>
          <h1>Client<span className="text-primary">'</span>s Testimonials</h1>
          <p className="text-balance">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <Card name="Neo" born="American" text="The booking process was as smooth as dodging bullets in slow motion, and the rates were a glitch in the Matrix—unbelievably low." review={96} img="https://i.pinimg.com/originals/31/e1/b0/31e1b00743eaeff77c7145ef403572fb.jpg" />
        <Card name="T-800" born="Model 101" text="Secured a vehicle through this platform—mission success. The booking process was efficient, like a well-oiled machine, and the rental rates were terminated—they couldn't compete." review={98} img="https://www.giantfreakinrobot.com/wp-content/uploads/2021/02/terminator1-900x600.jpg" />
      </div>
    </div>
  )
}

function Card({ name, text, review, img, born }: { name: string, text: string, review: number, img: string, born: string }) {
  return (
    <div className="grid grid-cols-2 bg-tertiary shadow-lg p-8 gap-8">
      <h3 className="col-span-2">"{text}"</h3>
      <div className="flex gap-3 items-center">
        <img className="rounded-full size-28 object-cover" src={img} alt={name} />
        <div className="text-nowrap">
          <p className="font-semibold text-lg">{name}</p>
          <p>{born}</p>
        </div>
      </div>
      <div className="grid place-items-center text-right">
        <p className="text-primary w-full text-4xl">{review}/100</p>
      </div>
    </div>
  )
}

export default Testimonials;