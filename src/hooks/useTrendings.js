import { useState, useEffect } from 'react';

export default function useTrendings(url) {
  const [trendings, setTrendings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let { data: trendings } = data;
      setLoading(false);
      setTrendings(trendings);
    }
    getData();

  }, [url]);

  return { trendings, loading };
}
