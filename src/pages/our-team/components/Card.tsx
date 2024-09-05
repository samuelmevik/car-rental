function Card({ name, title, image }: { name: string, title: string, image: string }) {
  return (
    <div className="bg-tertiary shadow-lg grid aspect-[3/4] max-w-sm sm:max-w-none">
      <div className="grid grid-rows-4">
        <div className="bg-blue-200 row-span-3 overflow-hidden">
          <img src={image} alt={name} className="object-cover object-center size-full" />
        </div>
        <div className="grid place-items-center">
          <div className="text-center">
            <h2>{name}</h2>
            <p className="text-lg">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;