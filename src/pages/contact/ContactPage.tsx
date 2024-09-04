import Directory from "../../components/Directory";
import Layout from "../../components/Layout";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <Layout>
      <Directory path="contact" />
      <ContactForm />
    </Layout>
  );
}

export default ContactPage;