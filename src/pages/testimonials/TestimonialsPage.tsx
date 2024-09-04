import Directory from "../../components/Directory";
import Layout from "../../components/Layout";
import Testimonials from "../../components/Testimonials";

function TestimonialsPage() {
  return (
    <Layout>
      <Directory path="testimonials" />
      <Testimonials />
    </Layout>
  );
}

export default TestimonialsPage;