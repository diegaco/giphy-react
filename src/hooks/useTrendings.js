import { useState, useEffect } from 'react';
import { API_BASE } from '../services/constants';

export default function useTrendings(url) {
  const [trendings, setTrendings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(`${API_BASE}/trending/searches?api_key=${process.env.REACT_APP_API_GIPHY}`);
      const data = await res.json();
      let { data: trendings } = data;
      setLoading(false);
      setTrendings(trendings);
    }
    getData();

  }, [url]);

  return { trendings, loading };
}
