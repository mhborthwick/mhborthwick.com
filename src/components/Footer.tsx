export function Footer() {
  return (
    <footer className="flex justify-end gap-2">
      <a
        className="text-indigo-700 hover:text-indigo-500 focus:text-indigo-500 duration-300 ease-in-out"
        href="https://github.com/mhborthwick"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underline underline-offset-4">GitHub</span>{" "}
        <span className="no-underline">↗</span>
      </a>
      <a
        className="text-indigo-700 hover:text-indigo-500 focus:text-indigo-500 duration-300 ease-in-out"
        href="https://www.linkedin.com/in/mhborthwick/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underline underline-offset-4">LinkedIn</span>{" "}
        <span className="no-underline">↗</span>
      </a>
      <a
        className="text-indigo-700 hover:text-indigo-500 focus:text-indigo-500 duration-300 ease-in-out"
        href="mailto:mhborthwick%20*at*%20gmail%20-dot-%20com"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underline underline-offset-4">Contact</span>{" "}
        <span className="no-underline">↗</span>
      </a>
    </footer>
  );
}
