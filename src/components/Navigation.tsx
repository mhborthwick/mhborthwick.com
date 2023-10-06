export function Navigation() {
  return (
    <header className="flex justify-between items-baseline mt-12 mb-24">
      <a href="/">
        <h1 className="text-3xl font-bold underline">Mike Borthwick</h1>
        <p className="leading-loose font-semibold text-stone-600">
          Software Engineer \\ Portland, OR
        </p>
      </a>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
  );
}
