import PrimaryButton from "../../../components/ui/PrimaryButton"


function Header() {
  return (
    <div className="h-[97.5svh]">
      <div className="h-full grid items-center">
        <div className="flex relative">
          <div className="min-w-10 z-10 sm:max-w-lg grid text-center shadow-md p-4">
            <h2>Plan your trip now</h2>
            <h1>Rent <span className="text-primary">&</span> Save Big!</h1>
            <p className="text-balance">Drive your dream car today! Unbeatable rates, unlimited miles, flexible pick-up, and endless possibilities await you</p>
            <div className="flex gap-4 pt-2 justify-center">
              <PrimaryButton text="Book Now" hover />
              <PrimaryButton text="Learn More" hover />
            </div>
          </div>
          <div className="hidden z-0 sm:block absolute top-0 right-0 w-[calc(max(60vmin,600px))]">
            <img className="transform aspect-video scale-x-[-1] object-cover" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FCar-PNG.png&f=1&nofb=1&ipt=ec49949521a8300cdb8d01d07811526ee8d65fcdb622ab5708e60c3b2627a697&ipo=images" alt="Car" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header