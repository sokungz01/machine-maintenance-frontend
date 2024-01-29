import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <p className="text-xl font-bold">404 Not found</p>
        <Link to="/" className="px-3 py-2 bg-slate-200 rounded-lg"> Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
