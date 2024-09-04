import Directory from "../../components/Directory";
import Layout from "../../components/Layout";
import Plan from "../../components/Plan";
import About from "./components/About";

function AboutPage() {
  return (
    <Layout>
      <Directory path="about" />
      <About className="mx-auto max-w-5xl" />
      <Plan />
    </Layout>
  );
}

export default AboutPage;