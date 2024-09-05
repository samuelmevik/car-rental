import Directory from "../../components/Directory";
import Layout from "../../components/Layout";
import { employees } from "../../db";
import Card from "./components/Card";

function OurTeamPage() {
  return (
    <Layout>
      <Directory path="our-team" />
      <h1>Our Amazing Team</h1>
      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-10">
        {
          employees.map((employee, index) => (
            <Card key={index} {...employee} />
          ))
        }
      </div>
    </Layout>
  );
}

export default OurTeamPage;