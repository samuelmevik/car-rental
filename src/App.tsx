import Booking from "./components/Booking"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderGuide from "./components/OrderGuide"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header />
        <Booking />
        <OrderGuide />
      </Wrapper>
    </>
  )
}

export default App
