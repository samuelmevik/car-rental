import Layout from "../../components/Layout";
import Plan from "../../components/Plan";
import Testimonials from "../../components/Testimonials";
import Booking from "./components/Booking";
import Header from "./components/Header";
import PickCar from "./components/PickCar";

function HomePage() {
  return (
    <Layout>
      <Header />
      <Booking className="mx-auto max-w-5xl" />
      <Plan />
      <PickCar />
      <Testimonials className="mx-auto max-w-5xl" />
    </Layout>
  );
}

export default HomePage;