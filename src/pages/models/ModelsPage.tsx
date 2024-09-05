import Directory from "../../components/Directory";
import Layout from "../../components/Layout";
import { cars } from "../../db";
import Card from "./components/Card";

function ModelsPage() {
  return (
    <Layout>
      <Directory path="models" />
      <h1>Our Car Fleet</h1>
      <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          cars.map((car, index) => (
            <Card key={index} {...car} />
          ))
        }
      </div>
    
    </Layout>
  );
}

export default ModelsPage;