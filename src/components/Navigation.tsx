import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="flex justify-between items-baseline mt-12 mb-24">
      <Link to="/">
        <h1 className="text-xl font-bold md:block md:text-3xl">
          Mike Borthwick
        </h1>
        <p className="text-md text-stone-600 md:block md:text-xl md:leading-loose font-semibold">
          Software Engineer. Portland, OR.
        </p>
      </Link>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
