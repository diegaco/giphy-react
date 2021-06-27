import { useState, useEffect } from 'react';
import { API_BASE } from '../services/constants';
import decorateGifs from '../services/decorateGifs';

const INITIAL_PAGE = 0;

export default function useGifs({ type, query, limit = 12 }) {
  const [page, setPage] = useState(INITIAL_PAGE);
  console.log('hook gif');
  const url =
    `${API_BASE}/gifs/${type}?api_key=${process.env.REACT_APP_API_GIPHY}${query ? '&q=' + query : ''}${limit ? '&limit=' + limit : ''}&offset=${page * limit}&rating=G&lang=en`

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let { data: gifs } = data;
      if (gifs) {
        gifs = decorateGifs(gifs)
        setGifs(gifs);
        setLoading(false);
      }
    }
    getData();

  }, [url, page]);

  return { gifs, loading, page, setPage };
}
