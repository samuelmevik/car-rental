import Booking from "./components/BookingSection"
import CarSelector from "./components/CarSelectorSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderGuide from "./components/OrderSection"
import Testimonials from "./components/TestimonialsSection"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Header />
        <div className="grid gap-24">
          <Booking className="mx-auto max-w-5xl" />
          <OrderGuide />
          <CarSelector />
          <Testimonials className="mx-auto max-w-5xl" />
          <Footer />
        </div>
      </Wrapper>
    </>
  )
}

export default App
