import { useState, useRef, useEffect } from "react";

export default function useNearScreen({ distance = '100px'}) {
  const [isNearScreen, setShow] = useState(false);
  const elRef = useRef();

  useEffect(() => {
    const onViewport = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onViewport, {
      rootMargin: distance
    });

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, [distance]);

  return { isNearScreen, elRef };
}
