import PrimaryButton from "../../../components/ui/PrimaryButton"


function Header() {
  return (
    <div className="h-[97.5svh]">
      <div className="h-full grid items-center">
        <div className="flex relative">
          <div className="min-w-10 z-10 sm:max-w-lg grid text-center shadow-md p-4 bg-white opacity-90">
            <h2>Plan your trip now</h2>
            <h1>Rent <span className="text-primary">&</span> Save Big!</h1>
            <p className="text-balance">Drive your dream car today! Unbeatable rates, unlimited miles, flexible pick-up, and endless possibilities await you</p>
            <div className="flex gap-4 pt-2 justify-center">
              <PrimaryButton text="Book Now" hover />
              <PrimaryButton text="Learn More" hover />
            </div>
          </div>
          <div className="hidden z-0 sm:block absolute top-0 right-0 w-[calc(max(60vmin,600px))] translate-y-[4rem]">
            <img className="transform aspect-video object-cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-blue-jaguar-f-pace-side-view-carcarvehicletransportjaguar-9615246537762i7ef.png&f=1&nofb=1&ipt=0a563c93dc93c83833a2fb0dd9ee975287385abe8d84117aee6e8a2ad98db41e&ipo=images" alt="Car" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header