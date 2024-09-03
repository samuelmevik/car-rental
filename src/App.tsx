import Booking from "./components/BookingSection"
import CarSelector from "./components/CarSelectorSection"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderGuide from "./components/OrderSection"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header />
        <Booking />
        <OrderGuide />
        <CarSelector />
      </Wrapper>
    </>
  )
}

export default App
