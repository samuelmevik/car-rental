import { Link } from "react-router-dom";

function Directory({ path }: { path: string }) {
  return (
    <div>
      <h2>Directory</h2>
      <h3 className="inline-flex gap-3"><Link to="/">Home</Link><span className="text-primary">/</span><Link to={`/${path}`} className="capitalize">{path}</Link></h3>
    </div>
  );
}

export default Directory;