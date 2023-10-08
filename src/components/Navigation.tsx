import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="flex justify-between items-baseline mt-12 mb-24">
      <Link to="/">
        <h1 className="text-3xl font-bold underline">Mike Borthwick</h1>
        <p className="md:leading-loose font-semibold text-stone-600">
          Software Engineer \\ Portland, OR
        </p>
      </Link>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
