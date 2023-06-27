import { useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      // Element is still in view
      setCoordinates(entry.boundingClientRect);
      console.log({entry})
      setInView(true);
    } else {
      // Element is starting to scroll out of view
      setCoordinates(entry.boundingClientRect);
      setInView(false);
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0, // Fire the callback as soon as the element starts to scroll out of view
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return {ref, inView, coordinates};
}

export default useInView;