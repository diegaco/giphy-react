import { useState, useRef, useEffect } from "react";

export default function useNearScreen({ distance = '100px', externalRef, once = true }) {
  const [isNearScreen, setShow] = useState(false);
  const elRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef : elRef;
    const onViewport = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onViewport, {
      rootMargin: distance
    });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => observer.disconnect();
  }, [distance, externalRef, once]);

  return { isNearScreen, elRef };
}
