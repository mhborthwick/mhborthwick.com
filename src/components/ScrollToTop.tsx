import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { useLocation } from "react-router-dom";

function debounce(func: () => void, delay: number) {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const debouncedScrollToTop = debounce(scrollToTop, 200);
    debouncedScrollToTop();
  }, [location.pathname]);

  return null;
}
