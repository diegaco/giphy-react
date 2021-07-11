import { useEffect, useRef } from "react"

export default function useSeo({ title, description }) {
  const prevTitleRef = useRef(document.title);
  const prevDescRef = useRef(document.querySelector('meta[name="description"]'));

  useEffect(() => {
    const prevTitle = prevTitleRef.current;
    if (title) {
      document.title = `${title} | Giffy`;
    }

    return () => document.title = prevTitle;

  }, [title]);

  useEffect(() => {
    const prevDesc = prevDescRef.current;
    const meta = document.querySelector('meta[name="description"]');

    if (description) {
      meta.setAttribute('content', description);
    }

    return () => meta.setAttribute('content', prevDesc.getAttribute('content'));

  }, [description]);
}
