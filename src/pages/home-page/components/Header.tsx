import PrimaryButton from "../../../components/ui/PrimaryButton"


function Header() {
  return (
    <div className="h-svh relative">
      <div className="flex items-center justify-center sm:justify-normal h-full">
        <div className="z-10 text-center max-w-prose bg-white shadow-lg p-4 opacity-90">
          <h2>Plan your trip now</h2>
          <h1>Rent <span className="text-primary">&</span> Save Big!</h1>
          <p className="text-balance">Drive your dream car today! Unbeatable rates, unlimited miles, flexible pick-up, and endless possibilities await you</p>
          <div className="flex gap-4 pt-2 justify-center">
            <PrimaryButton text="Book Now" hover />
            <PrimaryButton text="Learn More" hover />
          </div>
        </div>
        <img className="top-0 left-0 right-0 mx-auto bottom-0 translate-x-[25%] mt-auto sm:m-auto sm:translate-y-24  absolute aspect-video object-cover scale-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-blue-jaguar-f-pace-side-view-carcarvehicletransportjaguar-9615246537762i7ef.png&f=1&nofb=1&ipt=0a563c93dc93c83833a2fb0dd9ee975287385abe8d84117aee6e8a2ad98db41e&ipo=images" alt="Car" />
      </div>
    </div>
  )
}

export default Header